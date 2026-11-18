import { Code2, FlaskConical, FunctionSquare, Network } from "lucide-react";

export const reports = [
  {
    number: "01",
    category: "COMPUTING · RESEARCH BRIEF",
    title: "Attention Is All You Need",
    description:
      "How the Transformer changed sequence modeling—and what the original paper did, and did not, demonstrate.",
    icon: Network,
    readTime: "8 MIN READ",
    summary:
      "Vaswani and colleagues introduced the Transformer, an architecture built around attention rather than recurrence or convolution. Their 2017 paper evaluated it on machine-translation tasks and reported strong results with faster training than the recurrent models they compared against. This brief explains self-attention in plain language, walks through the paper’s evidence, and separates those findings from broader claims about today’s language models.",
    codeLanguage: "typescript",
    codeSnippet: `function scaledDotProductAttention(
  query: number[],
  keys: number[][],
  values: number[][],
) {
  const scores = keys.map((key) => dot(query, key) / Math.sqrt(query.length));
  const weights = softmax(scores);
  return weightedSum(weights, values);
}`,
    citation: "Vaswani et al. · NeurIPS 2017",
    source: "https://arxiv.org/abs/1706.03762",
  },
  {
    number: "02",
    category: "MATHEMATICS · READING NOTE",
    title: "The unreasonable effectiveness of data",
    description:
      "Why simple models can become powerful when they have more examples to learn from—and where that idea has limits.",
    icon: FunctionSquare,
    readTime: "6 MIN READ",
    summary:
      "Halevy, Norvig, and Pereira argued that, for some language tasks, access to very large datasets could matter more than increasingly elaborate algorithms. We unpack the paper’s examples and its central intuition, then consider the caveats: more data is not automatically better data, and scale does not remove the need to examine bias, task design, or what a model can actually infer.",
    codeLanguage: "typescript",
    codeSnippet: `type Example = { input: string; label: string };

function countByLabel(examples: Example[]) {
  return examples.reduce<Record<string, number>>((counts, example) => {
    counts[example.label] = (counts[example.label] ?? 0) + 1;
    return counts;
  }, {});
}`,
    citation: "Halevy, Norvig & Pereira · IEEE Intelligent Systems, 2009",
    source: "https://doi.org/10.1109/MIS.2009.36",
  },
  {
    number: "03",
    category: "SCIENCE · PAPER EXPLAINER",
    title: "What AlphaFold predicts about proteins",
    description:
      "A guide to protein-structure prediction, benchmark results, and the difference between a prediction and an experiment.",
    icon: FlaskConical,
    readTime: "9 MIN READ",
    summary:
      "The AlphaFold team presented a system for predicting protein structures from amino-acid sequences and reported highly accurate results in the CASP14 assessment. This explainer introduces the biological question, clarifies what the model outputs, and discusses confidence and limitations—because a computational prediction is a powerful research tool, not a replacement for every experimental measurement.",
    codeLanguage: "typescript",
    codeSnippet: `type Residue = { aminoAcid: string; confidence: number };

function summarizeConfidence(residues: Residue[]) {
  const total = residues.reduce((sum, residue) => sum + residue.confidence, 0);
  return residues.length === 0 ? 0 : total / residues.length;
}`,
    citation: "Jumper et al. · Nature, 2021",
    source: "https://doi.org/10.1038/s41586-021-03819-2",
  },
  {
    number: "04",
    category: "REACT · COMPONENTS",
    title: "Build UI from small components",
    description:
      "See how a typed function component turns data into reusable interface pieces.",
    icon: Code2,
    readTime: "5 MIN READ",
    summary:
      "React components are JavaScript or TypeScript functions that describe UI. Keeping a component focused makes it easier to reuse, test, and change without coupling unrelated parts of a page.",
    codeLanguage: "tsx",
    codeSnippet: `type GreetingProps = { name: string };

export function Greeting({ name }: GreetingProps) {
  return <h1>Hello, {name}</h1>;
}`,
    citation: "React · Your first component",
    source: "https://react.dev/learn/your-first-component",
  },
  {
    number: "05",
    category: "REACT · COMPOSITION",
    title: "Compose layouts with children",
    description:
      "Use the children prop to make flexible wrappers instead of hard-coding every layout variation.",
    icon: Code2,
    readTime: "5 MIN READ",
    summary:
      "Composition lets a parent provide content to a reusable shell. ReactNode is a useful TypeScript type for content that can be rendered as a child.",
    codeLanguage: "tsx",
    codeSnippet: `import type { ReactNode } from "react";

type PanelProps = { title: string; children: ReactNode };

function Panel({ title, children }: PanelProps) {
  return <section><h2>{title}</h2>{children}</section>;
}`,
    citation: "React · Passing props to a component",
    source: "https://react.dev/learn/passing-props-to-a-component",
  },
  {
    number: "06",
    category: "REACT · STATE",
    title: "Model local state with useState",
    description:
      "Let React track a component value and update the UI when that value changes.",
    icon: Code2,
    readTime: "6 MIN READ",
    summary:
      "useState returns the current state and a setter. When the next value depends on the previous one, use the functional updater form so updates compose correctly.",
    codeLanguage: "tsx",
    codeSnippet: `const [count, setCount] = useState(0);

function addOne() {
  setCount((current) => current + 1);
}`,
    citation: "React · State: a component's memory",
    source: "https://react.dev/learn/state-a-components-memory",
  },
  {
    number: "07",
    category: "TYPESCRIPT · REACT EVENTS",
    title: "Type event handlers clearly",
    description:
      "Use the element-specific React event type to safely read values from form controls.",
    icon: Code2,
    readTime: "5 MIN READ",
    summary:
      "Annotating event handlers makes the expected target element explicit and gives the editor the right properties for that element. Inferred callback types are also often sufficient when handlers are written inline.",
    codeLanguage: "tsx",
    codeSnippet: `function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  console.log(event.currentTarget.value);
}

<input onChange={handleChange} />`,
    citation: "React TypeScript Cheatsheet · Forms and events",
    source: "https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/",
  },
  {
    number: "08",
    category: "REACT · FORMS",
    title: "Keep inputs controlled",
    description:
      "Connect a form field to React state so the displayed value and application state stay in sync.",
    icon: Code2,
    readTime: "6 MIN READ",
    summary:
      "A controlled input receives its value from state and reports edits through onChange. This gives the component one clear source of truth for the field.",
    codeLanguage: "tsx",
    codeSnippet: `const [email, setEmail] = useState("");

<input
  value={email}
  onChange={(event) => setEmail(event.currentTarget.value)}
  type="email"
/>`,
    citation: "React · Sharing state between components",
    source: "https://react.dev/learn/sharing-state-between-components",
  },
  {
    number: "09",
    category: "REACT · EFFECTS",
    title: "Clean up effects that subscribe",
    description:
      "Pair subscriptions and timers with cleanup to avoid stale work after a component leaves the page.",
    icon: Code2,
    readTime: "6 MIN READ",
    summary:
      "An effect can return a cleanup function. React runs cleanup before the effect is re-synchronized and when the component unmounts, which is useful for timers, listeners, and subscriptions.",
    codeLanguage: "tsx",
    codeSnippet: `useEffect(() => {
  const timer = window.setInterval(() => {
    setSeconds((value) => value + 1);
  }, 1000);

  return () => window.clearInterval(timer);
}, []);`,
    citation: "React · Synchronizing with Effects",
    source: "https://react.dev/learn/synchronizing-with-effects",
  },
  {
    number: "10",
    category: "REACT · CUSTOM HOOKS",
    title: "Extract reusable state logic",
    description:
      "A custom hook packages a behavior so multiple components can use the same stateful logic.",
    icon: Code2,
    readTime: "5 MIN READ",
    summary:
      "Custom hooks are ordinary functions whose names begin with use. They can call built-in hooks and expose a small API tailored to a specific behavior.",
    codeLanguage: "tsx",
    codeSnippet: `function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((current) => !current);

  return [value, toggle] as const;
}`,
    citation: "React · Reusing logic with custom hooks",
    source: "https://react.dev/learn/reusing-logic-with-custom-hooks",
  },
  {
    number: "11",
    category: "REACT · CONTEXT + TYPESCRIPT",
    title: "Share values with typed context",
    description:
      "Use context for values needed across a subtree, and type the provider contract explicitly.",
    icon: Code2,
    readTime: "7 MIN READ",
    summary:
      "Context avoids passing the same value through many intermediate components. A typed context and a checked custom hook make missing providers easier to catch during development.",
    codeLanguage: "tsx",
    codeSnippet: `type Theme = "light" | "dark";
const ThemeContext = createContext<Theme | null>(null);

function useTheme() {
  const theme = useContext(ThemeContext);
  if (theme === null) throw new Error("ThemeProvider is missing");
  return theme;
}`,
    citation: "React · Passing data deeply with context",
    source: "https://react.dev/learn/passing-data-deeply-with-context",
  },
  {
    number: "12",
    category: "TYPESCRIPT · UI STATE",
    title: "Represent states with a union",
    description:
      "Discriminated unions make loading, success, and failure states explicit and prevent impossible combinations.",
    icon: Code2,
    readTime: "6 MIN READ",
    summary:
      "Instead of independent booleans that can conflict, model a state as one of several named variants. Narrow on the discriminant before reading variant-specific data.",
    codeLanguage: "typescript",
    codeSnippet: `type Result<T> =
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };

function message<T>(result: Result<T>) {
  if (result.status === "error") return result.message;
  return result.status;
}`,
    citation: "TypeScript Handbook · Narrowing",
    source: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html",
  },
  {
    number: "13",
    category: "TYPESCRIPT · GENERICS",
    title: "Write reusable typed helpers",
    description:
      "Generics preserve the relationship between an input type and the value a helper returns.",
    icon: Code2,
    readTime: "5 MIN READ",
    summary:
      "A generic parameter lets one function work with many data types without throwing away type information. Constraints can be added when an operation requires a specific shape.",
    codeLanguage: "typescript",
    codeSnippet: `function first<T>(items: readonly T[]): T | undefined {
  return items[0];
}

const selected = first(["React", "TypeScript"]);
// selected is string | undefined`,
    citation: "TypeScript Handbook · Generics",
    source: "https://www.typescriptlang.org/docs/handbook/2/generics.html",
  },
  {
    number: "14",
    category: "REACT · LISTS",
    title: "Give list items stable keys",
    description:
      "Stable keys help React match items when a list changes order or content.",
    icon: Code2,
    readTime: "4 MIN READ",
    summary:
      "A key identifies an item among its siblings. Prefer a stable identifier from the data instead of an array index when items can be inserted, removed, or reordered.",
    codeLanguage: "tsx",
    codeSnippet: `type Task = { id: string; title: string };

function TaskList({ tasks }: { tasks: Task[] }) {
  return tasks.map((task) => (
    <li key={task.id}>{task.title}</li>
  ));
}`,
    citation: "React · Rendering lists",
    source: "https://react.dev/learn/rendering-lists",
  },
  {
    number: "15",
    category: "REACT · PERFORMANCE",
    title: "Memoize only measured work",
    description:
      "useMemo can cache an expensive calculation between renders when its dependencies have not changed.",
    icon: Code2,
    readTime: "5 MIN READ",
    summary:
      "Memoization is a performance optimization, not a correctness requirement. Start with readable code, measure a bottleneck, and then consider caching the calculation.",
    codeLanguage: "tsx",
    codeSnippet: `const visibleItems = useMemo(
  () => items.filter((item) => item.title.includes(query)),
  [items, query],
);`,
    citation: "React · useMemo",
    source: "https://react.dev/reference/react/useMemo",
  },
  {
    number: "16",
    category: "REACT · DATA FETCHING",
    title: "Make asynchronous UI states explicit",
    description:
      "Model pending, success, and failure paths so users are not left guessing during a request.",
    icon: Code2,
    readTime: "6 MIN READ",
    summary:
      "Async interfaces should communicate progress and errors as well as successful results. A union gives the rendering code a clear set of cases to handle.",
    codeLanguage: "tsx",
    codeSnippet: `type LoadState<T> =
  | { status: "pending" }
  | { status: "ready"; value: T }
  | { status: "failed"; error: string };

function Status<T>({ state }: { state: LoadState<T> }) {
  if (state.status === "pending") return <p>Loading…</p>;
  if (state.status === "failed") return <p>{state.error}</p>;
  return <p>Loaded</p>;
}`,
    citation: "React · You Might Not Need an Effect",
    source: "https://react.dev/learn/you-might-not-need-an-effect",
  },
  {
    number: "17",
    category: "REACT · ACCESSIBILITY",
    title: "Connect labels with useId",
    description:
      "Generate a stable identifier to associate a form label with its input accessibly.",
    icon: Code2,
    readTime: "4 MIN READ",
    summary:
      "useId creates an ID suitable for connecting related accessibility attributes. It should not be used to generate list keys; those should come from the data.",
    codeLanguage: "tsx",
    codeSnippet: `const inputId = useId();

return (
  <>
    <label htmlFor={inputId}>Your name</label>
    <input id={inputId} name="name" />
  </>
);`,
    citation: "React · useId",
    source: "https://react.dev/reference/react/useId",
  },
  {
    number: "18",
    category: "REACT · TESTING",
    title: "Test behavior users can observe",
    description:
      "Check accessible UI behavior rather than implementation details such as component state variables.",
    icon: Code2,
    readTime: "6 MIN READ",
    summary:
      "A user-focused test renders a component, finds controls by their accessible role or name, performs an action, and checks the visible result. This keeps tests aligned with actual behavior.",
    codeLanguage: "tsx",
    codeSnippet: `render(<Counter />);

await user.click(
  screen.getByRole("button", { name: /increment/i }),
);

expect(screen.getByText("Count: 1")).toBeInTheDocument();`,
    citation: "Testing Library · Guiding principles",
    source: "https://testing-library.com/docs/guiding-principles/",
  },
];
