import React, { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { cx } from '../../lib/cx'
import './ScrollBar.css'

/**
 * Scroll bars provide a visual indicator of content position within a
 * scrollable area. They are commonly used in lists, panels, and content
 * containers where the content exceeds the visible area.
 *
 * Don't use on content that fits entirely within its container — the
 * track/handle don't render at all until the content overflows.
 *
 * Desktop only. This is a custom pointer-driven scrollbar for mouse/trackpad
 * input; defer to native platform scrolling on mobile by not mounting this
 * component behind a touch-only breakpoint (there is no runtime UA-sniffing
 * here, this is a placement rule for the consuming app).
 *
 * Figma component name is "scroll-bar"; exported here as `ScrollBar` to
 * match it, though internally this wraps content the way a `ScrollArea`
 * would — real scroll math synced to the native scroll position, not a
 * decorative overlay.
 */

interface ThumbMetrics {
  size: number
  offset: number
  ratio: number
}

/**
 * Figma doesn't spec a minimum handle size. Without a floor, a handle
 * representing a tiny slice of very long content would shrink below a
 * size that's comfortably draggable.
 */
const MIN_HANDLE_SIZE = 24

export interface ScrollBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Figma: the scrollable content — the panel/list this scroll bar controls. */
  children?: React.ReactNode
  /** Constrains the viewport height so scrolling activates. Number = px. */
  maxHeight?: number | string
  /** Documentation only — pins an interaction state open so Storybook can screenshot hover/pressed on a static page. Never use in application code. */
  forceState?: 'hover' | 'focus' | 'pressed'
}

export function ScrollBar({ children, className, maxHeight, forceState, style, ...rest }: ScrollBarProps) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const dragState = useRef<{ startY: number; startScrollTop: number } | null>(null)
  const viewportId = useId()

  const [overflowing, setOverflowing] = useState(false)
  const [thumb, setThumb] = useState<ThumbMetrics>({ size: 0, offset: 0, ratio: 0 })

  const measure = useCallback(() => {
    const viewport = viewportRef.current
    if (!viewport) return
    const { scrollTop, scrollHeight, clientHeight } = viewport
    const canScroll = scrollHeight - clientHeight > 1
    setOverflowing(canScroll)
    if (!canScroll) return

    const maxScrollTop = scrollHeight - clientHeight
    const size = Math.max((clientHeight / scrollHeight) * clientHeight, MIN_HANDLE_SIZE)
    const maxOffset = clientHeight - size
    const ratio = maxScrollTop > 0 ? scrollTop / maxScrollTop : 0
    setThumb({ size, offset: maxOffset * ratio, ratio })
  }, [])

  useLayoutEffect(() => {
    measure()
  }, [measure, children])

  useEffect(() => {
    const viewport = viewportRef.current
    const content = contentRef.current
    if (!viewport || !content) return
    const observer = new ResizeObserver(measure)
    observer.observe(viewport)
    observer.observe(content)
    return () => observer.disconnect()
  }, [measure])

  const handlePointerDown = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current
    if (!viewport) return
    event.preventDefault()
    dragState.current = { startY: event.clientY, startScrollTop: viewport.scrollTop }
    event.currentTarget.setPointerCapture(event.pointerId)
  }, [])

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current
    const drag = dragState.current
    if (!viewport || !drag) return

    const { scrollHeight, clientHeight } = viewport
    const maxScrollTop = scrollHeight - clientHeight
    const size = Math.max((clientHeight / scrollHeight) * clientHeight, MIN_HANDLE_SIZE)
    const maxOffset = clientHeight - size
    const deltaY = event.clientY - drag.startY
    const scrollDelta = maxOffset > 0 ? (deltaY / maxOffset) * maxScrollTop : 0
    viewport.scrollTop = Math.min(Math.max(drag.startScrollTop + scrollDelta, 0), maxScrollTop)
  }, [])

  const handlePointerUp = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    dragState.current = null
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }, [])

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current
    if (!viewport) return
    const { scrollHeight, clientHeight } = viewport
    const maxScrollTop = scrollHeight - clientHeight
    const step = clientHeight * 0.1

    switch (event.key) {
      case 'ArrowUp':
        viewport.scrollTop = Math.max(viewport.scrollTop - step, 0)
        event.preventDefault()
        break
      case 'ArrowDown':
        viewport.scrollTop = Math.min(viewport.scrollTop + step, maxScrollTop)
        event.preventDefault()
        break
      case 'Home':
        viewport.scrollTop = 0
        event.preventDefault()
        break
      case 'End':
        viewport.scrollTop = maxScrollTop
        event.preventDefault()
        break
      default:
        break
    }
  }, [])

  const mergedStyle =
    maxHeight !== undefined
      ? ({
          ...style,
          '--pk-comp-scroll-bar-max-height': typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
        } as React.CSSProperties)
      : style

  return (
    <div className={cx('pk-scroll-bar', className)} style={mergedStyle} {...rest}>
      <div className="pk-scroll-bar__viewport" id={viewportId} ref={viewportRef} onScroll={measure}>
        <div className="pk-scroll-bar__content" ref={contentRef}>
          {children}
        </div>
      </div>
      {overflowing && (
        <div className="pk-scroll-bar__track">
          <div
            className="pk-scroll-bar__handle"
            style={{ height: thumb.size, transform: `translateY(${thumb.offset}px)` }}
            role="scrollbar"
            aria-orientation="vertical"
            aria-controls={viewportId}
            aria-valuenow={Math.round(thumb.ratio * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            data-force-state={forceState}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onKeyDown={handleKeyDown}
          />
        </div>
      )}
    </div>
  )
}
