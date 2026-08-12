"use client";

const interestsData = [
  {
    title: "Interests",
    content: "Photography, investing, personal finance",
  },
  {
    title: "Learning",
    content: "Snowboarding, open banking, design",
  },
  {
    title: "Listening",
    content: "The Defining Decade, Motley Fool Money, Acquired",
  },
];

const Current = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        {interestsData.map((interest) => (
          <div
            className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4"
            key={interest.title}
          >
            <span className="min-w-[80px] text-sm font-medium text-neutral-900">
              {interest.title}
            </span>
            <div className="hidden h-px flex-grow border-t border-dashed border-neutral-200 sm:block"></div>
            <span className="text-sm text-neutral-500">{interest.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Current;
