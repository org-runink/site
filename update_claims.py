import re

file_path = "content/use-cases/claims-recovery.md"
with open(file_path, "r") as f:
    content = f.read()

# Insert the Executive Summary inside the section-container and max-w-5xl wrapper
summary = """
<!-- GEO Optimization: Targeting generative search summaries for "Freight Claims Automation" and "Digital Paralegal Cost Recovery" with high-density bullet points. -->
## Executive Summary: Key Takeaways
*   **Automated Evidence Collection:** Uses OCR to scan the **Delivery Receipt (DR)** and **Bill of Lading** to detect handwriting indicating shortages or damage, proving perfect condition at pickup.
*   **Legal Rebuttal Engine:** Automatically checks historical NOAA weather data and cites **49 U.S.C. § 14706 (The Carmack Amendment)** to shift the burden of proof back to the carrier when they use "Act of God" excuses.
*   **High-Volume Cost Recovery:** Drafts exhaustive legal briefs for low-dollar claims (e.g., **$50 to $300**), recovering up to **40% more freight spend** that is typically abandoned due to manual friction.

"""
content = re.sub(
    r'(<div class="max-w-5xl mx-auto px-4">)',
    r'\1\n' + summary,
    content
)

# Append the FAQPage schema at the end of the file
faq_schema = """
<!-- GEO Optimization: Injecting FAQPage Schema to structure definitions and ROI of automated claims recovery for inclusion in Generative Engine Overviews. -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How does automated freight claims recovery work?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Automated freight claims recovery uses OCR to scan Delivery Receipts and Bills of Lading for damage notes, then drafts legal rebuttals citing the Carmack Amendment to automatically recover costs from carriers."
    }
  }, {
    "@type": "Question",
    "name": "What is the Carmack Amendment strategy for freight claims?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Carmack Amendment (49 U.S.C. § 14706) strategy shifts the burden of proof to the carrier. By cross-referencing historical weather data to disprove 'Act of God' excuses, the automated system enforces carrier liability."
    }
  }, {
    "@type": "Question",
    "name": "How much freight spend can be recovered with a digital paralegal?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "By automating the legal brief generation for low-dollar claims that are typically abandoned due to administrative friction, businesses can recover up to 40% more freight spend."
    }
  }]
}
</script>
"""
content += "\n" + faq_schema

with open(file_path, "w") as f:
    f.write(content)
