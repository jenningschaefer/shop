/**
 * @file scripts/generate-terms-pdf.mjs
 * @description Generates the generic Terms & Conditions PDFs (DE + EN) into public/.
 *   Run with: npm run generate:terms
 * @author Jenning Schaefer
 * @license MIT
 */

import { mkdir, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PUBLIC_DIR = resolve(__dirname, '..', 'public')

const BRAND = 'Vesta'

const CONTENT = {
  de: {
    file: 'terms-de.pdf',
    title: 'Allgemeine Geschäftsbedingungen',
    intro: `Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Bestellungen, die über den ${BRAND} Online-Shop getätigt werden. Es handelt sich um ein generisches Musterdokument für Demonstrationszwecke und stellt keine Rechtsberatung dar.`,
    footer: `${BRAND} – Allgemeine Geschäftsbedingungen`,
    pageLabel: 'Seite',
    generatedLabel: 'Erstellt am',
    sections: [
      ['1. Geltungsbereich', `Für die Geschäftsbeziehung zwischen ${BRAND} (nachfolgend „Anbieter") und dem Kunden gelten ausschließlich die nachfolgenden Allgemeinen Geschäftsbedingungen in ihrer zum Zeitpunkt der Bestellung gültigen Fassung. Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.`],
      ['2. Vertragsschluss', `Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot, sondern eine Aufforderung zur Bestellung dar. Durch Anklicken des Bestellbuttons gibt der Kunde ein verbindliches Angebot zum Kauf der im Warenkorb enthaltenen Waren ab. Der Vertrag kommt mit der Bestellbestätigung durch den Anbieter zustande.`],
      ['3. Preise und Versandkosten', `Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer. Zusätzlich zu den angegebenen Preisen können Versandkosten sowie Gebühren der gewählten Zahlungsart anfallen. Diese werden im Bestellvorgang gesondert ausgewiesen.`],
      ['4. Zahlungsbedingungen', `Der Kunde kann zwischen den im Bestellvorgang angebotenen Zahlungsarten wählen. Die Zahlung ist mit Abschluss der Bestellung fällig. Bei Auswahl einer kostenpflichtigen Zahlungsart wird die entsprechende Gebühr im Gesamtbetrag berücksichtigt.`],
      ['5. Lieferung', `Die Lieferung erfolgt an die vom Kunden angegebene Lieferadresse. Angaben zur Lieferzeit sind unverbindlich, sofern nicht ausdrücklich ein verbindlicher Liefertermin zugesagt wurde. Teillieferungen sind zulässig, soweit dies für den Kunden zumutbar ist.`],
      ['6. Widerrufsrecht', `Verbraucher haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen den Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem der Kunde die Ware in Besitz genommen hat. Zur Ausübung des Widerrufsrechts genügt eine eindeutige Erklärung gegenüber dem Anbieter.`],
      ['7. Eigentumsvorbehalt', `Die gelieferte Ware bleibt bis zur vollständigen Bezahlung des Kaufpreises Eigentum des Anbieters.`],
      ['8. Gewährleistung', `Es gelten die gesetzlichen Gewährleistungsrechte. Offensichtliche Mängel sind dem Anbieter innerhalb einer angemessenen Frist nach Erhalt der Ware mitzuteilen.`],
      ['9. Datenschutz', `Der Anbieter verarbeitet personenbezogene Daten des Kunden ausschließlich im Rahmen der geltenden datenschutzrechtlichen Bestimmungen und nur, soweit dies zur Abwicklung der Bestellung erforderlich ist.`],
      ['10. Schlussbestimmungen', `Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Es gilt das Recht des Sitzlandes des Anbieters unter Ausschluss des UN-Kaufrechts.`],
    ],
  },
  en: {
    file: 'terms-en.pdf',
    title: 'Terms and Conditions',
    intro: `These Terms and Conditions apply to all orders placed through the ${BRAND} online shop. This is a generic sample document for demonstration purposes and does not constitute legal advice.`,
    footer: `${BRAND} – Terms and Conditions`,
    pageLabel: 'Page',
    generatedLabel: 'Generated on',
    sections: [
      ['1. Scope', `The following Terms and Conditions, in the version valid at the time of the order, apply exclusively to the business relationship between ${BRAND} (the "Provider") and the customer. Conflicting terms of the customer are not recognised unless the Provider expressly agrees to them in writing.`],
      ['2. Conclusion of Contract', `The presentation of products in the online shop does not constitute a legally binding offer but an invitation to order. By clicking the order button, the customer makes a binding offer to purchase the goods in the shopping cart. The contract is concluded once the Provider confirms the order.`],
      ['3. Prices and Shipping Costs', `All prices include statutory VAT. In addition to the stated prices, shipping costs and fees for the selected payment method may apply. These are shown separately during the ordering process.`],
      ['4. Payment Terms', `The customer may choose between the payment methods offered during checkout. Payment is due upon completion of the order. If a paid payment method is selected, the corresponding fee is included in the total amount.`],
      ['5. Delivery', `Delivery is made to the shipping address provided by the customer. Information on delivery times is non-binding unless a binding delivery date has been expressly agreed. Partial deliveries are permitted where reasonable for the customer.`],
      ['6. Right of Withdrawal', `Consumers have the right to withdraw from the contract within fourteen days without giving any reason. The withdrawal period is fourteen days from the day on which the customer took possession of the goods. A clear statement to the Provider is sufficient to exercise the right of withdrawal.`],
      ['7. Retention of Title', `The delivered goods remain the property of the Provider until the purchase price has been paid in full.`],
      ['8. Warranty', `The statutory warranty rights apply. Obvious defects must be reported to the Provider within a reasonable period after receipt of the goods.`],
      ['9. Data Protection', `The Provider processes the customer's personal data exclusively within the framework of applicable data protection regulations and only to the extent necessary to process the order.`],
      ['10. Final Provisions', `Should any provision of these Terms be invalid, the validity of the remaining provisions shall remain unaffected. The law of the Provider's country of registration applies, excluding the UN Convention on Contracts for the International Sale of Goods.`],
    ],
  },
}

// A4 in points
const PAGE_WIDTH = 595.28
const PAGE_HEIGHT = 841.89
const MARGIN = 56
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2

function wrapText(text, font, size, maxWidth) {
  const lines = []
  for (const rawLine of text.split('\n')) {
    const words = rawLine.split(/\s+/).filter(Boolean)
    let line = ''
    for (const word of words) {
      const candidate = line ? `${line} ${word}` : word
      if (font.widthOfTextAtSize(candidate, size) > maxWidth && line) {
        lines.push(line)
        line = word
      } else {
        line = candidate
      }
    }
    lines.push(line)
  }
  return lines
}

async function buildPdf(data) {
  const pdf = await PDFDocument.create()
  pdf.setTitle(`${BRAND} – ${data.title}`)
  pdf.setAuthor(BRAND)

  const font = await pdf.embedFont(StandardFonts.Helvetica)
  const fontBold = await pdf.embedFont(StandardFonts.HelveticaBold)
  const gray = rgb(0.4, 0.4, 0.4)
  const black = rgb(0.1, 0.1, 0.1)

  let page = pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT])
  let y = PAGE_HEIGHT - MARGIN

  const newPage = () => {
    page = pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT])
    y = PAGE_HEIGHT - MARGIN
  }
  const ensureSpace = (needed) => {
    if (y - needed < MARGIN + 30) newPage()
  }
  const drawLines = (text, { size, font: f, color, gap = 4, leading = 1.35 }) => {
    const lineHeight = size * leading
    for (const line of wrapText(text, f, size, CONTENT_WIDTH)) {
      ensureSpace(lineHeight)
      page.drawText(line, { x: MARGIN, y: y - size, size, font: f, color })
      y -= lineHeight
    }
    y -= gap
  }

  // Title
  drawLines(data.title, { size: 22, font: fontBold, color: black, gap: 10 })
  // Intro
  drawLines(data.intro, { size: 11, font, color: gray, gap: 16 })

  // Sections
  for (const [heading, body] of data.sections) {
    ensureSpace(40)
    drawLines(heading, { size: 13, font: fontBold, color: black, gap: 5 })
    drawLines(body, { size: 11, font, color: black, gap: 14 })
  }

  // Footer on every page
  const today = new Date().toISOString().slice(0, 10)
  const pages = pdf.getPages()
  pages.forEach((p, i) => {
    const footer = `${data.footer}   ·   ${data.generatedLabel} ${today}`
    p.drawText(footer, { x: MARGIN, y: MARGIN - 18, size: 8, font, color: gray })
    const label = `${data.pageLabel} ${i + 1}/${pages.length}`
    const labelWidth = font.widthOfTextAtSize(label, 8)
    p.drawText(label, { x: PAGE_WIDTH - MARGIN - labelWidth, y: MARGIN - 18, size: 8, font, color: gray })
  })

  return pdf.save()
}

async function main() {
  await mkdir(PUBLIC_DIR, { recursive: true })
  for (const data of Object.values(CONTENT)) {
    const bytes = await buildPdf(data)
    const out = resolve(PUBLIC_DIR, data.file)
    await writeFile(out, bytes)
    process.stdout.write(`✓ wrote ${out} (${bytes.length} bytes)\n`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
