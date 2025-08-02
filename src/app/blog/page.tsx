import React from "react";
import PageLayout from "@/layout/PageLayout";
import HeroComponent from "@/shared/HeroComponent";
const Blog = () => {
  return (
    <div>
      <PageLayout>
        <HeroComponent
          title="Insights, Tips & Stories"
          subtitle="Stay updated with the latest IELTS strategies, student experiences, and educational resources across Africa."
          backgroundImage="/images/img-4.png"
        />
      </PageLayout>
    </div>
  );
};

export default Blog;
