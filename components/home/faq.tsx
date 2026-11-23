const questions = [
  ["What can BizLink help me with?", "BizLink provides business and corporate, trading and supply, facility and maintenance, automotive, and digital and creative GALLERY."],
  ["Can BizLink help set up a company in Qatar?", "Yes. Business and corporate GALLERY include company formation, commercial registration, licensing, and government and PRO support."],
  ["Is facility support available around the clock?", "BizLink offers 24/7 pest control and cleaning in Doha."],
  ["Can I book mobile automotive GALLERY?", "Pathas Car Wash offers mobile car washing, and Prime Glass offers mobile windshield replacement."],
  ["How do I contact BizLink?", "Call +974 7766 1037 or +974 5009 1006, or email bizlink.qa@gmail.com."],
] as const;

export function Faq() {
  return (
    <section aria-labelledby="faq-title" className="bg-[#f3f8ff] px-5 py-16 text-[#142443]">
      <div className="mx-auto max-w-3xl">
        <h2 id="faq-title" className="mb-6 text-3xl font-black text-[#142443]">Frequently asked questions</h2>
        {questions.map(([question, answer]) => (
          <details key={question} className="border-b border-[#c9dbef] py-3">
            <summary className="cursor-pointer py-2 font-bold">{question}</summary>
            <p className="pb-2 pt-1">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
