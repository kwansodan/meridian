export interface GuideSection {
  id: string
  title: string
  content: string
  callout?: {
    type: "info" | "warning" | "tip"
    text: string
  }
}

export interface GuideFaq {
  question: string
  answer: string
}

export interface StatutoryGuide {
  slug: string
  title: string
  shortTitle: string
  subtitle: string
  metaDescription: string
  keywords: string
  category: "Incorporation" | "Foreign Investment" | "Compliance & Tax"
  readTime: string
  lastUpdated: string
  author: string
  summary: string
  tableOfContents: Array<{ id: string; title: string }>
  sections: GuideSection[]
  faqs: GuideFaq[]
}

export const GUIDES: StatutoryGuide[] = [
  {
    slug: "how-to-register-a-company-in-ghana-2026",
    title: "How to Register a Company in Ghana: The Definitive 2026 Guide",
    shortTitle: "Company Registration in Ghana",
    subtitle:
      "A complete, statutory step-by-step breakdown of the incorporation process at the Office of the Registrar of Companies (ORC), GRA tax setup, SSNIT employer registration, and MMDA permits.",
    metaDescription:
      "Statutory guide to registering a business in Ghana under the Companies Act 2019 (Act 992). Learn ORC filing procedures, GRA TIN, SSNIT registration, MMDA permits, and exact costs.",
    keywords:
      "register company in ghana, orc company registration, ghana company limited by shares, act 992 companies act ghana, registrar general department accra, how to register a business in ghana",
    category: "Incorporation",
    readTime: "12 min read",
    lastUpdated: "March 2026",
    author: "Deevale GH Corporate Legal Team",
    summary:
      "Under the Companies Act, 2019 (Act 992), registering a business in Ghana has shifted to modernized digital workflows. This guide covers entity selection, name reservation, mandatory officer appointments, statutory filings, and post-incorporation compliance so you can register smoothly without bureaucratic delays.",
    tableOfContents: [
      { id: "entities", title: "1. Selecting Your Business Entity in Ghana" },
      { id: "name-reservation", title: "2. Business Name Search & Reservation" },
      { id: "statutory-officers", title: "3. Mandatory Statutory Appointments (Act 992)" },
      { id: "tin-ghana-card", title: "4. Ghana Card & Tax Identification Requirements" },
      { id: "orc-filing", title: "5. Filing at the Registrar of Companies (ORC)" },
      { id: "post-incorporation", title: "6. Mandatory Post-Incorporation Registrations" },
      { id: "fees-timeline", title: "7. Statutory Fees & Realistic Timelines" },
      { id: "faqs", title: "8. Frequently Asked Questions" },
    ],
    sections: [
      {
        id: "entities",
        title: "1. Selecting Your Business Entity in Ghana",
        content: `Ghanaian corporate law recognizes several forms of business enterprise under the Companies Act, 2019 (Act 992) and the Incorporated Private Partnerships Act, 1962 (Act 152):

• **Company Limited by Shares (LTD):** The most common commercial vehicle. Liability of shareholders is limited to any unpaid amount on their shares. Requires at least two directors, one qualified company secretary, and one statutory auditor.
• **Sole Proprietorship (Business Name):** Suitable for informal or micro-businesses owned by a single Ghanaian individual. Quickest and cheapest to register, but offers zero personal asset protection — the owner bears unlimited personal liability.
• **Incorporated Partnership:** Formed by two or more individuals (maximum 20). Partners share profits and liabilities under a registered partnership agreement.
• **Company Limited by Guarantee (CLG):** Designed for non-profit entities, NGOs, foundations, and religious associations where profits are not distributed as dividends.
• **External Company (Branch):** An existing overseas corporate body registered in Ghana to operate as a local branch without forming a separate legal subsidiary.`,
        callout: {
          type: "tip",
          text: "Over 90% of commercial startups, tech ventures, and investment vehicles in Ghana should incorporate as a Company Limited by Shares to shield founders from personal liability and facilitate future outside capital.",
        },
      },
      {
        id: "name-reservation",
        title: "2. Business Name Search & Reservation at the ORC",
        content: `Before drafting incorporation forms, your proposed corporate name must be officially searched and reserved at the Office of the Registrar of Companies (ORC).

1. **Uniqueness:** The name must not be identical or misleadingly similar to an existing registered entity or reserved trademark.
2. **Prohibited & Restricted Words:** Words like 'Bank', 'Insurance', 'University', 'Municipal', 'Chamber of Commerce', or 'National' require ministerial or regulatory clearance before approval.
3. **Reservation Window:** Once approved, an ORC name reservation holds the name exclusively for sixty (60) days, during which you must submit final incorporation documents.

At Deevale GH, we recommend submitting at least two alternative names during your onboarding wizard to prevent delays if your primary choice conflicts with an existing register entry.`,
      },
      {
        id: "statutory-officers",
        title: "3. Mandatory Statutory Appointments (Act 992)",
        content: `The Companies Act 2019 introduced stringent corporate governance requirements. To incorporate a Company Limited by Shares, you must appoint:

• **Directors (Minimum of 2):** At least one director must be ordinarily resident in Ghana at all times. Directors must be of sound mind, at least 21 years old, and have not been declared bankrupt or convicted of fraud within the last 5 years.
• **Company Secretary:** Act 992 elevated the qualification of the Company Secretary. A secretary must now hold a recognized professional qualification (e.g., Institute of Chartered Secretaries and Administrators, Bar qualification, or recognized accounting body), or have served under mentorship of a qualified secretary for at least three years. Deevale GH acts as statutory company secretary for clients.
• **Statutory Independent Auditor:** Every company limited by shares must have an independent chartered accountant or accounting firm licensed by the Institute of Chartered Accountants Ghana (ICAG).
• **Local Registered Office Address:** A physical address located in Ghana where official notices and service of process can be delivered (cannot be just a P.O. Box). Digital address (GhanaPost GPS) is mandatory.`,
        callout: {
          type: "warning",
          text: "Act 992 strictly prohibits a sole director from also serving as the company secretary. Furthermore, an auditor cannot be an officer or employee of the company.",
        },
      },
      {
        id: "tin-ghana-card",
        title: "4. Ghana Card & Tax Identification Requirements",
        content: `For Ghanaian citizens and permanent residents, the Ghana Card (National Identification Authority PIN) functions as the personal Tax Identification Number (TIN). 

All local directors, shareholders, and secretaries must provide a valid Ghana Card. Foreign nationals without a Ghana Card must submit a clear copy of their international passport photo page along with residential proof and will be issued a non-resident TIN by the Ghana Revenue Authority (GRA).`,
      },
      {
        id: "orc-filing",
        title: "5. Filing at the Registrar of Companies (ORC)",
        content: `Once your company officers, share allocation, and standard or bespoke constitution (Regulations) are finalized, official filing forms are submitted to the ORC:

• **Form 3 (Statement of Particulars):** Discloses company name, business objects, registered address, authorized and stated capital.
• **Form 4 (Director and Secretary Consents):** Statutory declarations from appointed officers confirming eligibility and willingness to serve.
• **Regulations of the Company:** Modernized memorandum and articles defining shareholder voting rights, share transfers, and board procedures.

Upon successful review and payment of stamp duty and filing fees, the ORC issues the official **Certificate of Incorporation** accompanied by the certified Form 3/Form 4 profile.`,
      },
      {
        id: "post-incorporation",
        title: "6. Mandatory Post-Incorporation Registrations",
        content: `Incorporation at ORC is only milestone one. Under Ghanaian statute, operating without the following three registrations incurs severe fines:

1. **GRA Corporate Taxpayer Registration:** Your company must register with the Ghana Revenue Authority (GRA) Taxpayer Service Centre corresponding to your registered office. This yields your corporate TIN, provisional corporate income tax assessment, and VAT/WHT portal access.
2. **SSNIT Employer Registration:** Under the National Pensions Act (Act 766), any business with at least one employee must register with the Social Security and National Insurance Trust (SSNIT) and remit mandatory Tier 1 (13.5%) and Tier 2 (5%) contributions monthly.
3. **MMDA Business Operating Permit (BOP):** Local district assemblies (e.g. Accra Metropolitan Assembly - AMA, Ayawaso West, Tema) require every enterprise to obtain an annual operating license for physical business premises.`,
        callout: {
          type: "info",
          text: "Deevale GH includes GRA TIN registration, SSNIT employer registration, and MMDA operating permit support in our end-to-end company formation packages.",
        },
      },
      {
        id: "fees-timeline",
        title: "7. Statutory Fees & Realistic Timelines",
        content: `Realistic timelines and official government fees in Ghana:

• **Name Reservation:** 1 to 2 business days.
• **ORC Incorporation Filing:** 5 to 10 business days depending on backlog.
• **GRA & SSNIT Setup:** 3 to 5 business days post-incorporation.
• **Total Estimated Time:** 7 to 15 business days for a complete, operational company.

**Standard Statutory Costs (GHS):**
• ORC Business Name Reservation: ~GHS 25
• ORC Incorporation Filing & Stated Capital Stamp Duty: ~GHS 270 (plus 0.5% stamp duty on stated capital if above statutory base threshold)
• GRA TIN & SSNIT Setup: GHS 0 government statutory fee
• MMDA Business Operating Permit: Varies by assembly (typically GHS 300 - 1,500 based on sector and premises size).`,
      },
    ],
    faqs: [
      {
        question: "Can a non-Ghanaian own 100% of a company in Ghana?",
        answer:
          "Yes. Foreigners can own 100% of a Ghanaian company limited by shares, subject to meeting the minimum capital requirements and registration under the Ghana Investment Promotion Centre (GIPC) Act.",
      },
      {
        question: "Do I need to be physically present in Accra to incorporate?",
        answer:
          "No. With Deevale GH, the entire incorporation process is conducted digitally. You upload your identity documents, execute digital signatures, and track each stage through our web portal without travelling to Ghana.",
      },
      {
        question: "What is stated capital vs authorized shares?",
        answer:
          "Authorized shares refer to the total number of shares the company is legally allowed to issue. Stated capital is the actual cash or asset value contributed into the company by founding shareholders upon incorporation.",
      },
      {
        question: "Can one person be a director and shareholder?",
        answer:
          "Yes, an individual can simultaneously hold shares and serve as a director. However, you must appoint at least two directors, and at least one director must be resident in Ghana.",
      },
    ],
  },
  {
    slug: "foreign-company-registration-ghana-gipc-guide",
    title: "Doing Business in Ghana as a Foreigner: 2026 GIPC & Expat Investor Guide",
    shortTitle: "Foreign Investment & GIPC Guide",
    subtitle:
      "A comprehensive guide for diaspora founders, foreign investors, and multinational firms. Covers GIPC minimum foreign capital rules, equity thresholds, and expatriate quotas.",
    metaDescription:
      "A complete guide for foreign investors, diaspora entrepreneurs, and multinational companies looking to incorporate in Ghana. Covers GIPC minimum capital thresholds and Bank of Ghana rules.",
    keywords:
      "gipc registration ghana, foreign company registration ghana, how to start a business in ghana as a foreigner, gipc minimum capital requirements, doing business in ghana expat, foreign direct investment ghana",
    category: "Foreign Investment",
    readTime: "10 min read",
    lastUpdated: "March 2026",
    author: "Deevale GH Foreign Direct Investment Desk",
    summary:
      "Ghana is one of West Africa's top destinations for foreign direct investment (FDI). However, foreign participants must navigate the Ghana Investment Promotion Centre (GIPC) Act 2013 (Act 865). This guide explains the statutory capital requirements, joint venture options, and Bank of Ghana equity confirmation procedures.",
    tableOfContents: [
      { id: "gipc-overview", title: "1. The GIPC Legal Framework (Act 865)" },
      { id: "capital-thresholds", title: "2. Minimum Foreign Capital Thresholds" },
      { id: "capital-importation", title: "3. Capital Importation & Bank of Ghana (BoG)" },
      { id: "joint-venture", title: "4. Wholly Foreign vs. 10% Joint Venture" },
      { id: "subsidiary-vs-branch", title: "5. Ghanaian Subsidiary vs. External Branch" },
      { id: "expatriate-quotas", title: "6. Automatic Expatriate Quotas & Work Permits" },
      { id: "remote-process", title: "7. Incorporating Remotely with Deevale GH" },
      { id: "faqs", title: "8. Frequently Asked Questions" },
    ],
    sections: [
      {
        id: "gipc-overview",
        title: "1. The GIPC Legal Framework (Act 865)",
        content: `Foreign enterprises in Ghana are regulated under the Ghana Investment Promotion Centre Act, 2013 (Act 865). Any enterprise with non-Ghanaian equity participation must register with the GIPC after incorporating at the ORC.

The GIPC registration provides crucial investor protections, guarantees unconditional repatriation of dividends and net profits, and grants automatic quotas for hiring expatriate staff.`,
        callout: {
          type: "info",
          text: "Certain activities are strictly reserved for Ghanaian citizens under GIPC Act Section 27, including petty retail trading in markets, taxi operations, lottery operations, and beauty salons.",
        },
      },
      {
        id: "capital-thresholds",
        title: "2. Minimum Foreign Capital Thresholds (USD)",
        content: `Under GIPC Act Section 28, the statutory minimum foreign capital thresholds are:

1. **Joint Venture with a Ghanaian Citizen (Services / General Business):**
   • Foreign investor must contribute at least **USD $200,000** in cash equity or capital goods.
   • The Ghanaian partner must hold at least **10% equity** in the company.

2. **Wholly Foreign-Owned Enterprise (Services / General Business):**
   • Foreign investor(s) must contribute a minimum of **USD $500,000** in cash equity or capital goods.

3. **General Trading / Retail Enterprise:**
   • Requires minimum foreign capital of **USD $1,000,000** in cash or goods.
   • Must additionally employ at least twenty (20) skilled Ghanaian nationals.

*Note: For manufacturing, agriculture, and export enterprises, specific statutory exemptions and lower thresholds apply.*`,
        callout: {
          type: "warning",
          text: "Capital thresholds are denominated in US Dollars (USD) or its equivalent in convertible foreign currency, not Ghanaian Cedis.",
        },
      },
      {
        id: "capital-importation",
        title: "3. Capital Importation & Bank of Ghana (BoG) Certification",
        content: `To satisfy GIPC requirements, equity capital must be transferred through the Bank of Ghana (BoG) via a licensed commercial bank in Ghana:

1. **Inward Telegraphic Transfer:** The foreign shareholder wires capital from their overseas corporate or personal account directly to the company's capital account in Accra.
2. **Bank of Ghana Confirmation:** The receiving commercial bank notifies the Bank of Ghana and issues an official Electronic Confirmation of Inward Remittance letter.
3. **Goods/Equipment Importation Alternative:** If contributing equipment or machinery, customs valuation certificates and Bill of Lading documentation are submitted in lieu of cash.`,
      },
      {
        id: "joint-venture",
        title: "4. Wholly Foreign vs. 10% Joint Venture",
        content: `Many foreign technology startups and consultancies partner with a local Ghanaian co-founder holding at least 10% equity. This significantly lowers the capital requirement from **$500,000 down to $200,000**.

If you do not have a local partner, you can either:
• Incorporate with 100% foreign equity and meet the $500,000 threshold.
• Register an **External Company (Branch)** of your foreign parent company, which is exempted from the GIPC minimum capital requirement, provided it only conducts contracts awarded to the parent.`,
      },
      {
        id: "subsidiary-vs-branch",
        title: "5. Ghanaian Subsidiary vs. External Branch",
        content: `Choosing the right corporate structure is critical:

• **Subsidiary (Company Limited by Shares):** A distinct Ghanaian legal entity. Shields the parent company from liability incurred in Ghana. Subject to GIPC minimum capital, but possesses full local commercial standing and local banking capability.
• **External Company (Branch Office):** An extension of the overseas parent. Faster registration and no GIPC capital requirement, but the parent company remains directly liable for all branch liabilities, and some government procurement tenders restrict external companies.`,
      },
      {
        id: "expatriate-quotas",
        title: "6. Automatic Expatriate Quotas & Work Permits",
        content: `Registering with GIPC earns your company statutory **Automatic Expatriate Quotas** (work and residence permits for foreign management and technical personnel):

• $50,000 to $250,000 paid capital: 1 automatic quota
• $250,000 to $500,000 paid capital: 2 automatic quotas
• $500,000 to $700,000 paid capital: 3 automatic quotas
• Above $700,000 paid capital: 4 automatic quotas

These quotas bypass standard immigration quota applications, allowing key executive transfers immediately.`,
      },
      {
        id: "remote-process",
        title: "7. Incorporating Remotely with Deevale GH",
        content: `Deevale GH handles the entire cross-border incorporation and GIPC onboarding pipeline:
1. Online onboarding and passport KYC verification.
2. Drafting Act 992 compliant Regulations and Form 3.
3. Providing Registered Office Address in Airport City, Accra.
4. Supplying qualified Ghanaian Resident Corporate Secretary representation.
5. Opening local corporate bank account for capital importation.
6. Filing GIPC registration and securing certificate.`,
      },
    ],
    faqs: [
      {
        question: "Does the minimum capital need to be permanently locked in the bank?",
        answer:
          "No. Once the capital is imported, converted, and confirmed by the Bank of Ghana for GIPC registration, it can be deployed immediately for operational business expenses (rent, salaries, equipment, inventory).",
      },
      {
        question: "Does a foreign investor need a Ghanaian visa to register?",
        answer:
          "No. You do not need a visa or physical entry into Ghana to incorporate. Deevale GH conducts the process under Power of Attorney / electronic filing.",
      },
      {
        question: "What is the tax rate for foreign-owned companies in Ghana?",
        answer:
          "The standard Corporate Income Tax (CIT) rate in Ghana is 25%. However, tax holidays and preferential rates exist for agriculture, manufacturing, free zones (1% for first 10 years), and hospitality.",
      },
    ],
  },
  {
    slug: "ghana-business-compliance-calendar-deadlines",
    title: "Ghana Statutory Compliance Calendar: Deadlines, ORC Annual Returns & GRA Taxes",
    shortTitle: "Statutory Compliance Calendar",
    subtitle:
      "A complete guide to statutory filing dates, ORC annual returns, GRA monthly taxes, SSNIT employee pensions, and how to avoid heavy financial penalties.",
    metaDescription:
      "Never miss a statutory filing deadline in Ghana. Comprehensive compliance calendar covering ORC annual returns, GRA withholding tax (WHT), VAT, and SSNIT Tier 1 & 2 returns.",
    keywords:
      "ghana business compliance calendar, orc annual returns deadline ghana, gra tax filing schedule, ssnit monthly contribution deadline, mmda business permit renewal, business penalties ghana",
    category: "Compliance & Tax",
    readTime: "8 min read",
    lastUpdated: "March 2026",
    author: "Deevale GH Compliance & Bookkeeping Desk",
    summary:
      "In Ghana, incorporating your company is only the beginning. Defaulting on statutory obligations triggers cumulative daily fines, freeze orders on corporate bank accounts, and eventual administrative dissolution by the ORC. This calendar tracks all key deadlines across the ORC, GRA, SSNIT, and local assemblies.",
    tableOfContents: [
      { id: "overview", title: "1. The Statutory Compliance Landscape in Ghana" },
      { id: "orc-returns", title: "2. ORC Annual Returns & Financial Statements" },
      { id: "gra-monthly", title: "3. GRA Monthly Returns (PAYE, WHT, VAT)" },
      { id: "gra-annual", title: "4. GRA Corporate Income Tax (CIT) Filing" },
      { id: "ssnit-schedule", title: "5. SSNIT Pension Contributions (14th of Every Month)" },
      { id: "mmda-permit", title: "6. MMDA Business Operating Permit Renewal" },
      { id: "penalties", title: "7. Summary of Statutory Default Penalties" },
      { id: "faqs", title: "8. Frequently Asked Questions" },
    ],
    sections: [
      {
        id: "overview",
        title: "1. The Statutory Compliance Landscape in Ghana",
        content: `Every active business registered in Ghana must coordinate recurring compliance filings across four separate government institutions:
1. **Office of the Registrar of Companies (ORC)** for corporate governance and annual returns.
2. **Ghana Revenue Authority (GRA)** for indirect, direct, and employment taxes.
3. **Social Security and National Insurance Trust (SSNIT)** for worker retirement funds.
4. **Local Metropolitan/Municipal Assembly (MMDA)** for physical trade licenses.`,
      },
      {
        id: "orc-returns",
        title: "2. ORC Annual Returns & Financial Statements",
        content: `Under Section 126 of the Companies Act, 2019 (Act 992):
• Every company must file an **Annual Return** at least once in every calendar year.
• **Deadline:** Must be filed within forty-two (42) days after the Annual General Meeting (AGM), or by **April 30th** of the following calendar year.
• **Required Attachments:** Certified audited financial statements signed by a licensed independent auditor and at least two directors.
• **First Year Grace Period:** A newly incorporated company is not required to file an annual return in the calendar year of its incorporation.`,
        callout: {
          type: "warning",
          text: "The ORC enforces an automatic administrative penalty of GHS 450 to GHS 600+ for every month or fraction of a month that an annual return is delayed, plus risk of being struck off the register.",
        },
      },
      {
        id: "gra-monthly",
        title: "3. GRA Monthly Returns (PAYE, WHT, VAT)",
        content: `Ghanaian tax law mandates strict monthly tax declarations by the **15th day** of the following month:

• **PAYE (Pay-As-You-Earn):** Due by the **15th of each month**. Employers must deduct income tax from employee salaries and remit it to the GRA with the monthly employee deduction schedule.
• **Withholding Tax (WHT):** Due by the **15th of each month**. When paying suppliers for services or goods, companies must withhold the statutory rate (3% for goods, 7.5% - 15% for technical/management services) and remit with WHT credit certificates.
• **VAT / NHIL / GETFund / COVID Levy:** Due by the **last working day of the following month** for registered taxable businesses.`,
      },
      {
        id: "gra-annual",
        title: "4. GRA Corporate Income Tax (CIT) Filing",
        content: `• **Quarterly Estimated Tax:** Companies must pay four quarterly installments of estimated corporate income tax (typically March 31, June 30, September 30, and December 31).
• **Final Annual Return:** Must be submitted within **four (4) months** after the end of the company's financial year (usually **April 30th** for companies whose financial year ends on December 31st). Includes the final audited tax computation.`,
      },
      {
        id: "ssnit-schedule",
        title: "5. SSNIT Pension Contributions (14th of Every Month)",
        content: `Under the National Pensions Act, 2008 (Act 766):
• Employer contributions (13% Tier 1, 5% Tier 2) + Employee deduction (5.5%) must be remitted by the **14th of the ensuing month**.
• Late remittances attract a compound penalty of **3% per month** on the outstanding balance.`,
        callout: {
          type: "tip",
          text: "SSNIT compliance officers conduct frequent unannounced premises audits. Maintaining an active SSNIT Clearance Certificate is required for tenders, bank loans, and work permits.",
        },
      },
      {
        id: "mmda-permit",
        title: "6. MMDA Business Operating Permit Renewal",
        content: `Local municipal operating permits expire on **December 31st** of each year. 

Renewal bills are served between January and March. Paying on time ensures physical sticker issuance, avoiding municipal court summons and premises padlocking.`,
      },
      {
        id: "penalties",
        title: "7. Summary of Statutory Default Penalties",
        content: `| Agency | Obligation | Penalty for Default |
|---|---|---|
| **ORC** | Annual Returns | GHS 450+ per month of default; risk of striking off |
| **GRA** | PAYE / WHT Default | 10% penalty on tax unpaid + statutory compound interest |
| **GRA** | Late CIT Return | GHS 500 initial + GHS 10 per additional day of default |
| **SSNIT** | Monthly Contributions | 3% compound monthly penalty |
| **MMDA** | Operating Permit | Up to 50% surcharge; temporary premises closure |`,
      },
    ],
    faqs: [
      {
        question: "Can an inactive or dormant company skip annual returns?",
        answer:
          "No. A dormant company must still file a Nil Return accompanied by a statement of dormancy. Failure to file still attracts default penalties and risk of strike-off.",
      },
      {
        question: "How do I get a Tax Clearance Certificate (TCC)?",
        answer:
          "A TCC is issued by the GRA once all your monthly PAYE, WHT, VAT, and quarterly CIT returns are fully paid and up to date. It is valid for three to six months.",
      },
      {
        question: "Can Deevale GH manage all these deadlines for my business?",
        answer:
          "Yes. Our Compliance Care Plan tracks every deadline for your entity type, sends proactive email/SMS alerts, and handles the actual statutory filings on your behalf.",
      },
    ],
  },
]
