<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

> [!IMPORTANT]
> All portfolio copy and data live in `src/lib/portfolio-data.ts`; section
> components read from it and never hardcode content. Keeping the student's
> editable facts in one file means they can update the site without touching
> components, and placeholders stay obviously placeholder in one place.
>
> Sections follow the numbered frame in `src/components/portfolio/section.tsx`
> (margin label + content), so a new section slots into that component rather
> than inventing its own layout.
