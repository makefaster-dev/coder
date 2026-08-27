import type { FC } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface MarkdownCodeBlockProps {
	language: string;
	children: string;
}

/**
 * The syntax-highlighted code block used by Markdown. It lives in its own
 * module so the highlighter and its language grammars load lazily, keeping
 * them out of the boot-critical bundle.
 */
const MarkdownCodeBlock: FC<MarkdownCodeBlockProps> = ({
	language,
	children,
}) => {
	return (
		<SyntaxHighlighter
			style={dracula}
			language={language}
			useInlineStyles={false}
			codeTagProps={{ style: {} }}
		>
			{children}
		</SyntaxHighlighter>
	);
};

export default MarkdownCodeBlock;
