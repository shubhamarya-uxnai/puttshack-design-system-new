import React from 'react'
import { Modal } from '../Modal/Modal'
import { Info } from '../../../icons'
import './DiningMenuModal.css'

export interface DiningMenuItem {
  name: string
  price: string
  description: string
}

export interface DiningMenuSection {
  category: string
  items: DiningMenuItem[]
}

export interface DiningMenuModalProps {
  open: boolean
  onClose?: () => void
}

/** Figma: "Kitchen & Bar / A Quick Taste" (node 4281:90599) — the menu shown from the Dining
 * Only prompt's "View Menu" button. Real captured copy: Plates & Snacks + Cocktails sections. */
const MENU: DiningMenuSection[] = [
  {
    category: 'Plates & Snacks',
    items: [
      { name: 'Loaded tots', price: '$14', description: 'Bacon, chives, cheese sauce, crispy shallots.' },
      { name: 'Nashville hot tenders', price: '$16', description: 'Pickles, buttermilk ranch, hot honey drizzle.' },
      { name: 'Smash burger', price: '$17', description: 'Double patty, American cheese, house sauce.' },
      { name: 'Crispy cauliflower bites', price: '$12', description: 'Sticky sweet chili glaze, sesame, scallion.' },
    ],
  },
  {
    category: 'Cocktails',
    items: [
      { name: 'Puttshack punch', price: '$14', description: 'Rum, passionfruit, pineapple, lime.' },
      { name: 'Electric paloma', price: '$15', description: 'Tequila, grapefruit, blue spirulina, soda.' },
      { name: 'Espresso martini', price: '$15', description: 'Vodka, cold brew, vanilla.' },
    ],
  },
]

export function DiningMenuModal({ open, onClose }: DiningMenuModalProps) {
  if (!open) return null

  return (
    <Modal
      title="Kitchen & Bar"
      subtitle="A quick taste"
      onClose={onClose}
      showButtonGroup={false}
      showInformation
      information={
        <>
          <Info aria-hidden="true" size={16} />
          <span>Full menu available on arrival. Items vary by location.</span>
        </>
      }
    >
      <div className="pk-dining-menu">
        {MENU.map((section) => (
          <div key={section.category} className="pk-dining-menu__section">
            <p className="pk-dining-menu__category pk-text-label-small">{section.category}</p>
            <div className="pk-dining-menu__divider" />
            <div className="pk-dining-menu__items">
              {section.items.map((item) => (
                <div key={item.name} className="pk-dining-menu__item">
                  <div className="pk-dining-menu__item-row">
                    <span className="pk-dining-menu__item-name pk-text-title-small">{item.name}</span>
                    <span className="pk-dining-menu__item-price pk-text-title-small">{item.price}</span>
                  </div>
                  <p className="pk-dining-menu__item-description pk-text-body-small">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Modal>
  )
}
