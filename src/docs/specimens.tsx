import React from 'react'

/** A single color swatch: a filled square, the token name, and its resolved value. */
export function ColorSwatch({ name, varName }: { name: string; varName: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0' }}>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 8,
          border: '1px solid rgb(14 1 21 / 0.12)',
          background: `var(${varName})`,
          flexShrink: 0,
        }}
      />
      <div>
        <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 13, color: '#0E0115' }}>{name}</div>
        <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 12, color: 'rgb(14 1 21 / 0.64)' }}>
          {varName}
        </div>
      </div>
    </div>
  )
}

/** A grid wrapper for ColorSwatch children. */
export function SwatchGrid({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 4 }}>
      {children}
    </div>
  )
}

/** A spacing/radius specimen: a token-sized box next to its name and pixel value. */
export function SizeSwatch({ name, varName, kind = 'box' }: { name: string; varName: string; kind?: 'box' | 'radius' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '6px 0' }}>
      <div
        style={{
          width: kind === 'box' ? `var(${varName})` : 40,
          height: kind === 'box' ? 24 : 40,
          minWidth: 4,
          background: '#00C1DE',
          borderRadius: kind === 'radius' ? `var(${varName})` : 2,
          flexShrink: 0,
        }}
      />
      <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 13 }}>
        <span style={{ color: '#0E0115' }}>{name}</span>{' '}
        <span style={{ color: 'rgb(14 1 21 / 0.64)' }}>{varName}</span>
      </div>
    </div>
  )
}

/** A live specimen of one named Text Style class. */
export function TypeSpecimen({ name, className, sample = 'Puttshack Design System' }: { name: string; className: string; sample?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, padding: '10px 0', borderBottom: '1px solid rgb(14 1 21 / 0.06)' }}>
      <div style={{ width: 190, flexShrink: 0, fontFamily: 'ui-monospace, monospace', fontSize: 12, color: 'rgb(14 1 21 / 0.64)' }}>
        {name}
      </div>
      <div className={className} style={{ color: '#0E0115' }}>
        {sample}
      </div>
    </div>
  )
}
