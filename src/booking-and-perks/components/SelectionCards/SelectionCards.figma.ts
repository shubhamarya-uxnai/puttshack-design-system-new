// url=https://www.figma.com/design/X5YJsGIXBKazkrUaxk0jR9/Booking-and-Perks-Flow?node-id=4435-179395
// source=src/booking-and-perks/components/SelectionCards/SelectionCards.tsx
// component=SelectionCards
import figma from 'figma'
const instance = figma.selectedInstance

const selected = instance.getEnum('Selection', {
  False: false,
  True: true,
})

const onDarkBackground = instance.getEnum('Background', {
  False: false,
  True: true,
})

const title = instance.getString('Title#4435:8')
const content = instance.getString('Content#4435:9')
const showDetails = instance.getBoolean('Details#4605:0')
const popular = instance.getBoolean('Popularity#4435:13')
const showCheck = instance.getBoolean('Check#4435:14')
const showPriceBreakdown = instance.getBoolean('Price breakdown#4605:4')
const adultPrice = instance.getString('Adult price#4435:10')
const juniorPrice = instance.getString('Junior Price#4435:11')
const showTotalPrice = instance.getBoolean('Total price#4605:8')
const totalPrice = instance.getString('Total Price#4435:12')

export default {
  example: figma.code`
    <SelectionCards
      ${selected ? 'selected' : ''}
      ${onDarkBackground ? 'onDarkBackground' : ''}
      title="${title}"
      content="${content}"
      ${showDetails ? '' : 'showDetails={false}'}
      ${popular ? 'popular' : ''}
      ${showCheck ? '' : 'showCheck={false}'}
      ${showPriceBreakdown ? 'showPriceBreakdown' : ''}
      ${adultPrice ? figma.code` adultPrice="${adultPrice}"` : ''}
      ${juniorPrice ? figma.code` juniorPrice="${juniorPrice}"` : ''}
      ${showTotalPrice ? 'showTotalPrice' : ''}
      ${totalPrice ? figma.code` totalPrice="${totalPrice}"` : ''}
    />
  `,
  imports: ['import { SelectionCards } from "./SelectionCards"'],
  id: 'selection-cards',
  metadata: { nestable: true },
}
