export const wordCount=text=>String(text||'').trim().split(/\s+/u).filter(Boolean).length;
export function percentChange(before,after){if(!Number.isFinite(before)||!Number.isFinite(after)||before===0)throw Error('נדרש בסיס סופי שונה מאפס.');return (after-before)/before*100}
export function barHeights(baseline=0){if(!Number.isFinite(baseline)||baseline<0||baseline>65)throw Error('בסיס הציר חייב להיות בין 0 ל-65.');return {written:68-baseline,ai:72-baseline,ratio:(72-baseline)/(68-baseline),scoreRatio:72/68}}
export function intervalInfo(low=-1,high=9,estimate=4){if(![low,high,estimate].every(Number.isFinite)||low>high||estimate<low||estimate>high)throw Error('טווח או אומדן לא תקינים.');return {low,high,estimate,includesZero:low<=0&&high>=0}}
export function rubricScore(levels,weights=[20,15,15,15,20,15]){return weights.reduce((sum,w,i)=>sum+w*Math.max(0,Math.min(3,Number(levels[i])||0))/3,0)}
export function comparisonMetrics(checked,supported,covered,invented,time){if(![checked,supported,covered,invented,time].every(Number.isFinite)||checked<0||supported<0||supported>checked||covered<0||covered>5||invented<0||time<0)throw Error('בדקו את הספירות: נתמכות לא יותר מנבדקות; כיסוי בין 0 ל-5; ערכים לא שליליים.');return {supportRate:checked?supported/checked*100:null,coverageRate:covered/5*100,invented,time}}
export function escapeCheck(stage,value,source){return String(value).trim()===['3','0','4','0'][stage]&&source===['א2','א2','א3','א4'][stage]}
export const close=(actual,expected,tolerance=.15)=>Number.isFinite(actual)&&Math.abs(actual-expected)<=tolerance;
