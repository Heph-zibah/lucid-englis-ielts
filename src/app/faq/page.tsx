"use client";

import React from "react";
import PageLayout from "@/layout/PageLayout";
import HeroComponent from "@/shared/HeroComponent";
import { groupedFaqs } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = () => {

  return (
    <main>
      <HeroComponent
        title="Got Questions? We’ve Got Answers"
        subtitle="Everything you need to know about our IELTS preparation, pricing, support, and more."
        backgroundImage="/images/img-3.png"
      />
      <div>
        <PageLayout>
          <section className="container py-16 px-4 mt-10">
            <h2 className="text-3xl font-bold text-center mb-10 text-primary">
              Frequently Asked Questions
            </h2>
            
            <div>
              {groupedFaqs.map((group) => (
                <div key={group.category} className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-primary">
                    {group.category}
                  </h2>
                  <Accordion type="single" collapsible>
                    {group.items.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-lg font-medium text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </section>
        </PageLayout>
      </div>
    </main>
  );
};

export default faq;


