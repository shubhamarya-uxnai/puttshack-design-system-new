import React from 'react'
import { cx } from '../../lib/cx'
import { Plus, Minus as MinusIcon } from '../../icons'
import './Stepper.css'

/**
 * Figma models this as two separate component sets living side by side under
 * the "Stepper Buttons" section of the Button page — "Add" (node
 * 10872:107981) and "Minus" (node 10872:107884). They share an identical
 * 40×40 circular shape, padding and token set, and differ only in which
 * icon they show, so they're implemented here as one component with a
 * `direction` prop rather than two near-duplicate components.
 */
export type StepperDirection = 'add' | 'minus'

export interface StepperProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Which Figma component set to render — "Add" (plus icon) or "Minus" (minus icon). */
  direction: StepperDirection
  /**
   * Figma variant property `Active`. `true` (the default) is the normal,
   * interactive circle. `false` renders the muted/disabled treatment and
   * also sets the native `disabled` attribute — the source file has no
   * "Active=False but still clickable" state, `Active=False` *is* this
   * component's disabled look.
   * @default true
   */
  active?: boolean
  /**
   * Documentation only — pins the `Hover=True` variant open so Storybook
   * can screenshot it on a static page. Never use in application code; real
   * hover comes from `:hover`.
   */
  forceState?: 'hover'
  /**
   * Accessible name — Figma has no label layer on either component (it's an
   * icon-only circle), so one isn't inferable from the design and must be
   * supplied. Defaults to a quantity-picker phrasing; override when the
   * control means something else (e.g. "Zoom in").
   */
  'aria-label'?: string
}

const DEFAULT_LABEL: Record<StepperDirection, string> = {
  add: 'Increase quantity',
  minus: 'Decrease quantity',
}

/**
 * A small circular +/- tap target. Meant to be used in a pair on either side
 * of a number to build a quantity picker (e.g. number of players, number of
 * bays) — this component only renders the button itself, the count in the
 * middle and the increment/decrement logic belong to the consumer.
 */
export function Stepper({
  direction,
  active = true,
  forceState,
  className,
  'aria-label': ariaLabel,
  ...rest
}: StepperProps) {
  const Icon = direction === 'add' ? Plus : MinusIcon

  return (
    <button
      type="button"
      disabled={!active}
      aria-label={ariaLabel ?? DEFAULT_LABEL[direction]}
      data-force-state={forceState}
      className={cx('pk-stepper', `pk-stepper--${direction}`, className)}
      {...rest}
    >
      <Icon className="pk-stepper__icon" aria-hidden="true" />
    </button>
  )
}
