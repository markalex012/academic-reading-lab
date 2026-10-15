# מעבדת הקריאה הביקורתית / Academic Reading Lab

Hebrew RTL educational site adapted from the supplied 30-page `AI_Academic_Reading.pdf`.

Includes four lessons, practice dossiers A/B, an editable reading map and evidence sheets, six games, three simulations, five numeric exercises, interactive bar/CI graphics, six prompt templates, a transfer task and the original weighted 0–3 rubric. Reasoning is assessed by learner/teacher rather than automatic language grading. Fictional practice data and prepared AI outputs are visibly labeled.

Site: https://markalex012.github.io/academic-reading-lab/

No live AI or user account is required. Work stays in browser localStorage and can be exported as JSON or printed. Source references and reading-status limitations are retained; provider capabilities are described as the dated guide's review, not newly verified claims.

## Local development

```powershell
python -m http.server 8770
node test.mjs
node --check app.js
```

Open http://localhost:8770 . HTTP is required for modules. Local `source.pdf` is retained unchanged outside the public `dist` folder; the authored website is published without uploading the original PDF attachment.

Tests cover percentage bases, axis truncation, CI inclusion of zero, rubric weights, comparison constraints and numeric/evidence escape locks.
