import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type HashtagInfo = {
  hashtag: string;
  startIndex: number;
  endIndex: number;
};

function extractHashtagsWithLocation(text: string): HashtagInfo[] {
  const hashtagRegex = /#[a-zA-Z0-9_]+/g;
  const matches: HashtagInfo[] = [];

  let match;
  while ((match = hashtagRegex.exec(text)) !== null) {
    matches.push({
      hashtag: match[0], // The matched hashtag
      startIndex: match.index, // The start index of the hashtag
      endIndex: match.index + match[0].length - 1, // The end index
    });
  }

  return matches;
}

type HashtagContentProps = {
  content: string;
};

const HashtagContent: React.FC<HashtagContentProps> = ({ content }) => {
  const hashtagMatches = extractHashtagsWithLocation(content);

  const renderContentWithHashtags = () => {
    if (hashtagMatches.length === 0) {
      return <span>{content}</span>; // No hashtags, just return the text
    }

    const elements: JSX.Element[] = [];
    let lastIndex = 0;

    hashtagMatches.forEach((match, index) => {
      // Add text before the hashtag
      if (lastIndex < match.startIndex) {
        elements.push(
          <span key={`text-${index}`}>
            {content.slice(lastIndex, match.startIndex)}
          </span>,
        );
      }

      // Add the hashtag as a link
      elements.push(
        <Button
          asChild
          variant={"link"}
          className={"p-0 h-0 w-fit text-[1rem] font-bold"}
        >
          <Link key={`hashtag-${index}`} href={`tag/${match.hashtag.slice(1)}`}>
            {match.hashtag}
          </Link>
        </Button>,
      );

      // Update the last index to after the current hashtag
      lastIndex = match.endIndex + 1;
    });

    // Add any remaining text after the last hashtag
    if (lastIndex < content.length) {
      elements.push(<span key={`text-end`}>{content.slice(lastIndex)}</span>);
    }

    return elements;
  };

  return <p>{renderContentWithHashtags()}</p>;
};

export { HashtagContent };
