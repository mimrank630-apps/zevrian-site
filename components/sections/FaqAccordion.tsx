import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export interface FaqItem {
  id: string
  question: string
  answer: string
}

interface FaqAccordionProps {
  items: FaqItem[]
  className?: string
}

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  return (
    <Accordion type="multiple" className={className}>
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className="text-left font-medium text-[--text-primary] hover:text-gold hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-[--text-muted] leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
