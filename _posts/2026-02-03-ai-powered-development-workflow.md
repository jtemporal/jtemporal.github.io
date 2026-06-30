---
bookbanner: true
comments: true
date: 2026-02-03T05:00:00+00:00
description: "What I learned building a real product with AI tools as collaborators: where they helped, where they failed, and why clarity matters more than the tools themselves."
image: /images/covers/miscellaneous.webp
lang: en
layout: post
type: post
related: false
tags:
- ai
- software development
- chatgpt
- github copilot
- english
title: "AI-powered software development flow: Lessons from shipping My Yarn Stash"
author_note: false
mermaid: true

---

When I started building [**My Yarn Stash**](https://myyarnstash.app), I wasn't trying to prove AI could build an app for me.

I wanted to answer a practical question:

> What actually changes when you treat AI tools as long-term collaborators across planning, implementation, and design?
>

Not with demos or toy examples, but with a real product that has users, persistent data, billing, authentication, and migrations—all the unglamorous constraints that come with shipping software meant to stick around.

What follows is a breakdown of how AI fit into each phase, where it helped, where it failed, and what I learned or was reminded about tool boundaries by building something real.

## The day the AI deleted my database

Early in the project, I asked a coding agent to help with a schema change. It confidently suggested:

```bash
rm yarn.db
# Then recreate with new schema
```

And I let it.

Gone. All the test data I'd been building up. Hours of manual entry to stress-test edge cases. Deleted in a single command because the AI treated the database like a throwaway artifact.

The AI didn't behave incorrectly. It did exactly what made sense if you assume databases are ephemeral. The problem was that **I** hadn't established guardrails.

That moment reminded me to both pay more attention and adjust how I collaborated with AI tools. I needed to be very clear about constraints.

Later I added rules to my copilot instructions:

- NEVER delete database files
- ALWAYS run migrations instead
- Before any destructive operation, run backups first

And went on to recreate my database. The AI didn't change its behaviour. I changed mine.

This became the pattern for the entire project: **AI amplified my clarity and punished my ambiguity and lack of attention.**

The database deletion reminded me of something fundamental: vague instructions produce unpredictable results. That lesson shaped how I approached every other phase of this project moving forward.

## Separate conversations, separate contexts

After the database incident, I knew I needed better constraint management. That started with how I structured conversations.

I treated ChatGPT like a colleague I'd grab for specific discussions.

Each feature got its own conversation thread:

- One for billing and entitlements
- One for the AI extraction flow
- One for soft-delete patterns
- One for launch strategy

This wasn't about organization. It was about **context management**.

<pre class="mermaid">
graph TB
    %% Styles
    classDef orange fill:#FEF3E6,stroke:#F59E0B,stroke-width:2px,color:#7C2D12;
    classDef blue fill:#E8EEF6,stroke:#3C87C9,stroke-width:2px,color:#0f172a;
    classDef green fill:#E6F4F1,stroke:#00B478,stroke-width:2px,color:#064E3B;
    classDef purple fill:#ECE7F8,stroke:#9C8AD9,stroke-width:2px,color:#0f172a;
    classDef note fill:#F3F4F6,stroke:#6B7280,stroke-dasharray: 5 5,color:#111827;

    %% Central collaborator
    AI[ChatGPT<br/>as collaborator]:::purple

    %% Separate conversations
    Billing[Billing & entitlements<br/>conversation]:::blue
    Extraction[AI extraction flow<br/>conversation]:::blue
    SoftDelete[Soft-delete patterns<br/>conversation]:::blue
    Launch[Launch strategy<br/>conversation]:::blue

    %% Separate outputs
    BillingOut[billing.md]:::green
    ExtractionOut[extraction.md]:::green
    SoftDeleteOut[soft-delete.md]:::green
    LaunchOut[launch.md]:::green

    %% Connections (no cross-links!)
    AI --> Billing
    AI --> Extraction
    AI --> SoftDelete
    AI --> Launch

    Billing --> BillingOut
    Extraction --> ExtractionOut
    SoftDelete --> SoftDeleteOut
    Launch --> LaunchOut

    %% Note
    Note[Each conversation has a single purpose and is bounded context]:::note
    Note -.-> AI
</pre>

When everything lives in one chat, the AI starts to get slow and confused, that's when constant "summarizing history" increase time to answers, so as an engineer leveraging AI, you have to dutifully manage the context window. A billing conversation shouldn't bleed into UI discussions. Implementation details shouldn't pollute planning threads.

Separate chats forced clarity. Each conversation had a single purpose, which made it easier to:

- Stay focused on one problem
- Evaluate outputs against specific goals
- Make decisions without noise

### What those conversations actually looked like

**Branding: From vague to concrete**

I started with "I want it to feel cozy and calm." Through discussion, we identified edge cases I hadn't considered:

- Text baked into images would need rework every time pricing changed
- Realistic imagery would read as generic stock photos
- "Organizing" visuals imply judgment. Better to frame as "inventory tracking"
- Gradients applied inconsistently would create visual noise

The conversation forced specificity. By the end, I had constraints like "no text in images" and "single vertical gradient system" that my coding agent could implement reliably.

**Account page: Surfacing failure modes**

When planning the account page, ChatGPT helped identify non-obvious problems:

- **Timezone drift**: Automatically updating timezone when users travel would silently change project dates. Solution: only update on explicit user action.
- **Empty state guilt**: Showing "0 finished projects" or prompting users to "finish your first project" creates pressure. Solution: gentle empty state with no call to action.

These weren't implementation details. They were experience risks that would erode trust if missed.

**Launch strategy: Reframing the goal**

I initially thought about launch as a visibility event: where to post, how to announce.

The discussion reframed it as a **state change**: from "only I use this" to "other people can use this safely."

That shifted focus from:

- "How many people see this?"

To:

- "What breaks when the first real users arrive?"
- "Is this experience internally consistent?"
- "Where can people get confused or succeed quickly?"

I deprioritized announcements and spent more time on onboarding clarity instead.

Every useful insight got distilled into markdown. Feature specs, constraints, architectural decisions: all rewritten in my own words with the help of ChatGPT, structured for clarity, stored alongside the code.

This forced two things:

1. I had to actually understand the decision
2. The output became durable and reviewable

## Stack decisions: What I chose vs. what I asked about

With clear conversation boundaries established, I could make better stack decisions. I came into the project with strong opinions about some parts of the stack and no opinion at all about others.

<pre class="mermaid">
graph TB
    %% Styles
    classDef orange fill:#FEF3E6,stroke:#F59E0B,stroke-width:2px,color:#7C2D12;
    classDef blue fill:#E8EEF6,stroke:#3C87C9,stroke-width:2px,color:#0f172a;
    classDef green fill:#E6F4F1,stroke:#00B478,stroke-width:2px,color:#064E3B;
    classDef purple fill:#ECE7F8,stroke:#9C8AD9,stroke-width:2px,color:#0f172a;

    %% end
    subgraph ME ["Stack I chose"]
            Auth0[Auth0 for auth]:::blue
            FastAPI[FastAPI]:::blue
            Supabase[Supabase for database + storage]:::blue
            Frontend[Vanilla JavaScript and CSS]:::blue
            Emails[Resend]:::blue
            AIproviders[Replicate]:::blue
        end

        %% Subgraph: What AI helped evaluate
        subgraph AI ["AI evaluated"]
            Payments[Payment gateway]:::orange
            Deploy[Deployment platform]:::orange
        end
    %% Relationship between the two
    ME:::green
    AI:::purple
</pre>

**What I decided before asking AI:**

- **Auth0** for authentication (familiar, reliable, scalable)
- **FastAPI** as the web framework (Python, async, good docs, also familiar and with great Auth0 support)
- **Supabase** for database and storage (Postgres with good tooling and prod database at 0 cost)
- **Vanilla JavaScript** and **handwritten CSS** to start instead of a framework (less abstraction, easier to reason about with AI and for me to follow along)
- **Resend for emailing users:** a welcome email for the users and another to notify myself when new user signed up
- **Replicate:** to provide AI features like the label extraction information

These choices weren't about AI compatibility. They were about reducing cognitive load and keeping a codebase I could jump in without the help of AI if needed.

**What I asked AI to help evaluate:**

- **Payment gateway**: I had no strong opinion. We discussed options and landed on **Polar** for simplicity and developer experience.
- **Deployment platform**: I wanted something low-cost that I already understood. Heroku fit both criteria.

The pattern here matters: I brought constraints and context to the conversation instead of asking "what should I use?" in a vacuum.

AI didn't tell me what to build with. It helped me think through trade-offs for the decisions I hadn't made yet.

## Learning which model does what well

Stack decisions settled, the next challenge was figuring out which AI tool to use when. Understanding model strengths came from repeated experience across different contexts.

I didn't use one AI tool for everything. That was deliberate. Through building, I found a flow that worked for me:

<pre class="mermaid">
flowchart TB
    %% Styles (modern, readable, low contrast)
    classDef blue fill:#E8EEF6,stroke:#3C87C9,stroke-width:2px,color:#0f172a;
    classDef decision fill:#F3F4F6,stroke:#6B7280,stroke-width:2px,color:#111827;
    classDef simple fill:#E6F4F1,stroke:#00B478,stroke-width:2px,color:#064E3B;
    classDef complex fill:#FEF3E6,stroke:#F59E0B,stroke-width:2px,color:#7C2D12;
    style one fill:#E8E8E8,stroke:#CCCCCC,stroke-width:2px;
    style two fill:#E8E8E8,stroke:#CCCCCC,stroke-width:2px;

    %% Nodes
    A[Chat with ChatGPT:<br/>Map out the work<br/>and generate markdown]:::blue
    B[Commit markdown<br/>in GitHub Mobile app]:::blue

    D[Open GitHub issue<br/>Assign Copilot]:::simple
    H{PR stuck?}:::decision
    I[Download branch locally<br/>and unblock with Opus<br/>in Agent mode]:::simple

    F[Review markdown <br/>locally<br/>with Haiku <br/>in Plan mode]:::complex
    G[Implement with Opus<br/>in Agent mode]:::complex

    E[Review and <br/>merge PRs]:::blue


    EE[No]:::decision
    II[Yes]:::decision

    subgraph one ["`For simple tasks`"]
        direction TB
        D --> H
        H --> EE
        H --> II --> I
        %% Z@{ shape: brace-l, label: "identifies the tool to use,<br>packages user query in<br>the format the server<br>understands"}
    end

    subgraph two ["`For complex tasks`"]
        direction TB
        F --> G
    end
    %% Flow
    A --> B
    B --> one
    B --> two
    G --> E
    EE --> E
    I --> E
</pre>

**ChatGPT for planning and exploration**

Most planning conversations happened in ChatGPT in the mobile app. I used it on my phone during downtime to think through features, identify edge cases, and explore design decisions before writing any code.

The mobile accessibility mattered. I could sketch out billing logic while having my coffee in the morning or map out future features during a commute. By the time I grabbed my computer to code, I'd already worked through the conceptual problems.

**GitHub Copilot Agents for straightforward work**

Well-defined low-complexity features and bugs went to GitHub issues and I would let Copilot handle implementation through PRs asynchronously by assigning Copilot to a given issue. It freed me up to work on more-complex and high value things while Copilot handled the implementation of the "no-brainer" tasks.

When agents got stuck online, I'd download the code and ask Claude Opus to step in.

**VS Code Copilot for local development**

I used VS Code with Copilot in different modes and with models depending on the work:

*Claude Haiku:*

- Mostly in Plan mode;
- Quick iterations when following up on features locally;
- Good for refactoring and adjusting implementation details that didn't require more scope other than one file

*Claude Opus:*

- Mostly in Agent mode;
- Complex situations with many moving pieces
- Used when precision and accuracy mattered more than speed

No matter the model though, they were always constrained by explicit conventions in [`copilot-instructions.md`](http://copilot-instructions.md). The lesson wasn't "use the best model." It was knowing not only **when to switch** models and modes but also **why switching** should happen.

That judgment is a skill. AI tools don't remove it.

The database deletion happened because I let my guard down. I got comfortable with AI-assisted coding and stopped questioning the suggestions. It was a good reminder that different contexts need different constraints. By this phase of the project, I'd learned to match tool capabilities to task requirements.

## Functional first, pretty later (because I'm not a designer)

With implementation flowing more smoothly, I turned to design. This required a different kind of clarity.

I deliberately delayed visual design work. Not because of anything AI-related, but because **CSS and JavaScript are not my strong suit.**

I focused on making things functional first: flows, data models, interactions. Once those settled, I could tackle design from a more stable foundation. It didn't look ugly but it clearly wasn't beautiful:

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/UulQpVyeEMs?si=H_U2hXDIpeTHtwo-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>

My first exploration with [Stitch](https://stitch.withgoogle.com), Google's Gemini-based tool that transforms text descriptions into UI designs, showed me how powerful it was. I dropped the link of the working app and asked for a redesign. It made something pretty, but it didn't look like *my* product.

So I used ChatGPT to put together the branding guidelines: tone, colour direction, what feelings I wanted the UI to convey. Once I had that document written down, I went back to Stitch with:

- Screenshots of the functional app
- The branding document
- Specific constraints like "redesign this following the brand guidelines"

The result you see below:

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/VHyfaJH969o?si=Mf0jGLxjQbp02ngQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>

That combination worked. The design felt right because I'd done the thinking first. And did I mention it now supports dark mode as well?

The lesson: **Tools work better when you've already established intent.** Just like the database needed constraints, design tools needed direction.

## What this experience taught me about building with AI

Going through all these steps I noticed a few patterns that go beyond individual tool choices. These are a few things I'm carrying forward:

**1. AI doesn't replace judgment. It makes judgment more important**

The database deletion wasn't an AI failure. It was a clarity failure. Once I added explicit constraints, the tools became more reliable.

**2. Context boundaries matter**

Separate conversations for separate concerns reduced drift and forced focus.

**3. Model switching is a learned skill**

Understanding when to use a lightweight model versus a heavy one came from repeated friction, not documentation.

**4. Design still requires taste**

AI can accelerate iteration, but you need to know what you're aiming for. "Make it pretty" produces generic results. "Make it feel cozy and trustworthy" with examples gives you something to evaluate.

**5. Shipping something real teaches more than demos ever could**

Most AI tool examples live in a world where you can always start over. Production software doesn't. That constraint forced honesty about where AI helps and where it doesn't.

## What this means for learning AI tools

I always believed developers do better when they learn the limitations of the tools they use when building software. Specially since development is no-longer my day job, this project became an outlet for experiment and trying new tools and it helped shape how I evaluate and talk about AI tools.

Demos have their place in my world, but nothing beats the actual experience of building something and learn by doing.

Building My Yarn Stash gave me a even clearer sense of where AI accelerates work and where it introduces risk. Not from reading about it, but from hitting the boundaries myself.

If you're trying to find your footing with AI tools: **build something real.** Solve a problem you face often, try the new tools and find the flow that works for you.

Step away for a moment from the tutorials and courses and build your own project free of the constraints instructors purposely impose in order to teach and give students a good experience. Something with users, data you can't lose, and decisions that compound over time.

You'll learn more from one broken migration than from a hundred perfect prompts.