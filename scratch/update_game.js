const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'index.html');
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

console.log("Reading index.html...");

// 1. Update clareQuestions array (approx line 320 to 420)
const clareQuestionsOldPattern = `        const clareQuestions = [
            {
                id: "1-1",
                scene: "백인 전용 호텔 공간에서 IRENE와의 첫 만남",
                text: "백인 호텔에서 옛 친구 아이린을 발견했다. 아는 척을 할까?",
                choices: [
                    { text: "A. 과거의 나를 아는 사람을 발견하다니, 바로 반갑게 아는 척 한다.", pChange: 0, cChange: 1, sChange: 0 },
                    { text: "B. 혹시 내 과거를 소문내면 어떡하지? 걱정하며 조심스럽게 아는 척 한다.", pChange: 1, cChange: 0, sChange: 1 }
                ]
            },
            {
                id: "2-1",
                scene: "백인 전용 호텔 공간에서 CLARE의 객실 복도",
                text: "Irene에게 자신의 현재 삶을 얼마나 솔직하게 얘기할까?",
                choices: [
                    { text: "A. 부유한 백인 남편과의 안정적인 결혼 생활만 강조하며, 일부러 행복한 삶만을 얘기한다.", pChange: 1, cChange: 0, sChange: 1 },
                    { text: "B. 백인으로 살아가는 삶이 주는 불안과 두려움도 조심스럽게 털어놓는다.", pChange: -1, cChange: 1, sChange: -1 }
                ]
            },
            {
                id: "2-2",
                scene: "백인 전용 호텔 공간에서 CLARE의 객실 복도",
                text: "패싱을 선택한 이유를 어떻게 말할까?",
                choices: [
                    { text: "A. 이 선택이 자신과 가족에게 최선이었다고, 거의 후회 없는 선택처럼 말한다.", pChange: 1, cChange: -1, sChange: 1 },
                    { text: "B. 살아남기 위한 선택이었지만, 여전히 옳은 선택이었인지 스스로 확신하지 못한다고 말한다.", pChange: -1, cChange: 1, sChange: -1 }
                ]
            },
            {
                id: "3-1",
                scene: "IRENE의 집",
                text: "Irene의 집에 들어왔다, 그녀의 집과 가족에 대해서 뭐라고 말을 할까?",
                choices: [
                    { text: "A. 이곳이 답답해 보인다는 농담 섞인 말을 건넨다.", pChange: 1, cChange: -1, sChange: 1 },
                    { text: "B. 이런 공기와 사람들의 온기가 그리웠다고 말한다.", pChange: -1, cChange: 1, sChange: -1 }
                ]
            },
            {
                id: "3-2",
                scene: "IRENE의 집",
                text: "Irene과 나눈 대화가 즐거웠다. 하지만 앞으로 Irene에 대해서 어떻게 생각할지 고민이 된다.",
                choices: [
                    { text: "A. 예전 시절을 떠올리게 해 주는 ‘좋은 옛 친구’ 정도로 생각한다.", pChange: 1, cChange: 0, sChange: 1 },
                    { text: "B. 경계를 함께 넘나할 수 있는, 위험하지만 끌리는 동료처럼 느끼기 시작한다.", pChange: 0, cChange: 1, sChange: -1 }
                ]
            },
            {
                id: "4-1",
                scene: "백인 파티 / 호텔",
                text: "사람들이 흑인에 대한 비하 발언을 하며 나에게 그렇지 않냐고 물어본다, 뭐라고 대답할까?",
                choices: [
                    { text: "A. “그들이 조금 그런 편이지”라며 마음에도 없는 말을 한다.", pChange: 1, cChange: -1, sChange: 1 },
                    { text: "B. “그들도 우리와 다르지 않다.”고 조심스럽게 말한다.", pChange: 0, cChange: 1, sChange: -1 }
                ]
            },
            {
                id: "4-2",
                scene: "백인 파티 / 호텔",
                text: "John이 내 피부가 갈수록 까매진다며, 조만간 흑인이 되는 거 아니냐는 농담을 한다.",
                choices: [
                    { text: "A. 과하게 웃으며 강하게 부정해, 의심 자체를 불쾌하게 받아친다.", pChange: 1, cChange: -1, sChange: 0 },
                    { text: "B. 가벼운 농담으로 받아치며, 자연스럽게 다른 화제로 넘어간다.", pChange: 0, cChange: 0, sChange: 1 }
                ]
            },
            {
                id: "5-1",
                scene: "할렘 / 흑인 모임 (무도회장)",
                text: "오랜만에 느끼는 흑인 사교회의 해방감이 좋으면서도, 깊이 엮였다가 혹시 내 패싱이 들통날까 봐 두렵다. 나는 어떻게 행동할까?",
                choices: [
                    { text: "A. 사람들 사이로 들어가 이야기를 나누고, 적극적으로 어울린다.", pChange: -1, cChange: 1, sChange: -1 },
                    { text: "B. 잠깐 둘러보기만 하고, 곧 자리를 떠나거나 멀찍이서 지켜본다.", pChange: 0, cChange: 0, sChange: 0 }
                ]
            },
            {
                id: "5-2",
                scene: "할렘 / 흑인 모임 (무도회장)",
                text: "사람들이 나에게 아이린과 어떻게 아는 사이냐고 물어본다.",
                choices: [
                    { text: "A. 예전에는 흑인 동네에서 지냈었다고, 아주 조심스럽게 털어놓는다.", pChange: -1, cChange: 1, sChange: -1 },
                    { text: "B. 그저 우연히 들른 손님일 뿐이라며, 곧 돌아갈 사람처럼 자신을 소개한다.", pChange: 1, cChange: -1, sChange: 1 }
                ]
            },
            {
                id: "6-1",
                scene: "6층 아파트 파티 (마지막 장면)",
                text: "한 흑인 남성이 다가와 나에게 함께 춤을 추자고 권한다.",
                choices: [
                    { text: "A. 살짝 미소를 지으며 뒤로 물러서서, 들고 있던 와인잔을 만지작거리며 사람들을 구경한다.", pChange: 2, cChange: -2, sChange: 2 },
                    { text: "B. 모피 코트를 벗어 던지고, 웃음을 터뜨리며 사람들 한가운데로 걸어 들어가 함께 춤을 춘다.", pChange: -2, cChange: 2, sChange: -2 }
                ]
            },
            {
                id: "6-2",
                scene: "6층 아파트 파티 (존의 난입)",
                text: "분노한 존이 성큼성큼 다가와서 나의 정체를 의심하며 화를 낸다, 어떻게 할까?",
                choices: [
                    { text: "A. 붙잡히려는 팔을 살짝 빼내어 자신의 화려한 모피 코트를 여미며, 차갑고 우아한 목소리로 대꾸한다.", pChange: 2, cChange: -2, sChange: 1 },
                    { text: "B. 존을 향해 섰던 몸을 돌려, 열린 창문 근처에 선 아이린의 곁으로 바짝 다가가 선다.", pChange: -2, cChange: 2, sChange: -2 }
                ]
            }
        ];`;

const clareQuestionsNew = `        const clareQuestions = [
            {
                id: "1-1",
                scene: "백인 전용 호텔 공간에서 IRENE와의 첫 만남",
                text: "백인 호텔에서 옛 친구 아이린을 발견했다. 아는 척을 할까?",
                choices: [
                    { text: "A. 과거의 나를 아는 사람을 발견하다니, 바로 반갑게 아는 척 한다.", pChange: 0, cChange: 1, sChange: 0 },
                    { text: "B. 혹시 내 과거를 소문내면 어떡하지? 걱정하며 조심스럽게 아는 척 한다.", pChange: 1, cChange: 0, sChange: 1 }
                ]
            },
            {
                id: "2-1",
                scene: "백인 전용 호텔 공간에서 CLARE의 객실 복도",
                text: "Irene에게 자신의 현재 삶을 얼마나 솔직하게 얘기할까?",
                choices: [
                    { text: "A. 부유한 백인 남편과의 안정적인 결혼 생활만 강조하며, 일부러 행복한 삶만을 얘기한다.", pChange: 1, cChange: 0, sChange: 1 },
                    { text: "B. 백인으로 살아가는 삶이 주는 불안과 두려움도 조심스럽게 털어놓는다.", pChange: -1, cChange: 1, sChange: -1 }
                ]
            },
            {
                id: "2-2",
                scene: "백인 전용 호텔 공간에서 CLARE의 객실 복도",
                text: "패싱을 선택한 이유를 어떻게 말할까?",
                choices: [
                    { text: "A. 이 선택이 자신과 가족에게 최선이었다고, 거의 후회 없는 선택처럼 말한다.", pChange: 1, cChange: -1, sChange: 1 },
                    { text: "B. 살아남기 위한 선택이었지만, 여전히 옳은 선택이었는지 스스로 확신하지 못한다고 말한다.", pChange: -1, cChange: 1, sChange: -1 }
                ]
            },
            {
                id: "3-1",
                scene: "IRENE의 집",
                text: "Irene의 집에 들어왔다, 그녀의 집과 가족에 대해서 뭐라고 말을 할까?",
                choices: [
                    { text: "A. 이곳이 답답해 보인다는 농담 섞인 말을 건넨다.", pChange: 1, cChange: -1, sChange: 1 },
                    { text: "B. 이런 공기와 사람들의 온기가 그리웠다고 말한다.", pChange: -1, cChange: 1, sChange: -1 }
                ]
            },
            {
                id: "3-2",
                scene: "IRENE의 집",
                text: "Irene과 나눈 대화가 즐거웠다. 하지만 앞으로 Irene에 대해서 어떻게 생각할지 고민이 된다.",
                choices: [
                    { text: "A. 예전 시절을 떠올리게 해 주는 ‘좋은 옛 친구’ 정도로 생각한다.", pChange: 1, cChange: 0, sChange: 1 },
                    { text: "B. 경계를 함께 넘나들 수 있는, 위험하지만 끌리는 동료처럼 느끼기 시작한다.", pChange: 0, cChange: 1, sChange: -1 }
                ]
            },
            {
                id: "4-1",
                scene: "백인 파티 / 호텔",
                text: "사람들이 흑인에 대한 비하 발언을 하며 나에게 그렇지 않냐고 물어본다, 뭐라고 대답할까?",
                choices: [
                    { text: "A. “그들이 조금 그런 편이지”라며 마음에도 없는 말을 한다.", pChange: 1, cChange: -1, sChange: 1 },
                    { text: "B. “그들도 우리와 다르지 않다.”고 조심스럽게 말한다.", pChange: 0, cChange: 1, sChange: -1 }
                ]
            },
            {
                id: "4-2",
                scene: "백인 파티 / 호텔",
                text: "John이 내 피부가 갈수록 까매진다며, 조만간 흑인이 되는 거 아니냐는 농담을 한다.",
                choices: [
                    { text: "A. 과하게 웃으며 강하게 부정해, 의심 자체를 불쾌하게 받아친다.", pChange: 1, cChange: -1, sChange: 0 },
                    { text: "B. 가벼운 농담으로 받아치며, 자연스럽게 다른 화제로 넘어간다.", pChange: 0, cChange: 0, sChange: 1 }
                ]
            },
            {
                id: "5-1",
                scene: "할렘 / 흑인 모임 (무도회장)",
                text: "오랜만에 느끼는 흑인 사교회의 해방감이 좋으면서도, 깊이 엮였다가 혹시 내 패싱이 들통날까 봐 두렵다. 나는 어떻게 행동할까?",
                choices: [
                    { text: "A. 사람들 사이로 들어가 이야기를 나누고, 적극적으로 어울린다.", pChange: -1, cChange: 1, sChange: -1 },
                    { text: "B. 잠깐 둘러보기만 하고, 곧 자리를 떠나거나 멀찍이서 지켜본다.", pChange: 0, cChange: 0, sChange: 0 }
                ]
            },
            {
                id: "5-2",
                scene: "할렘 / 흑인 모임 (무도회장)",
                text: "사람들이 나에게 아이린과 어떻게 아는 사이냐고 물어본다.",
                choices: [
                    { text: "A. 예전에는 흑인 동네에서 지냈었다고, 아주 조심스럽게 털어놓는다.", pChange: -1, cChange: 1, sChange: -1 },
                    { text: "B. 그저 우연히 들른 손님일 뿐이라며, 곧 돌아갈 사람처럼 자신을 소개한다.", pChange: 1, cChange: -1, sChange: 1 }
                ]
            },
            {
                id: "6-1",
                scene: "6층 아파트 파티 (마지막 장면)",
                text: "한 흑인 남성이 다가와 나에게 함께 춤을 추자고 권한다.",
                choices: [
                    { text: "A. 살짝 미소를 지으며 뒤로 물러서서, 들고 있던 와인잔을 만지작거리며 사람들을 구경한다.", pChange: 2, cChange: -2, sChange: 2 },
                    { text: "B. 모피 코트를 벗어 던지고, 웃음을 터뜨리며 사람들 한가운데로 걸어 들어가 함께 춤을 춘다.", pChange: -2, cChange: 2, sChange: -2 }
                ]
            },
            {
                id: "6-2",
                scene: "6층 아파트 파티 (존의 난입)",
                text: "분노한 존이 성큼성큼 다가와서 나의 정체를 의심하며 화를 낸다, 어떻게 할까?",
                choices: [
                    { text: "A. 붙잡히려는 팔을 살짝 빼내어 자신의 화려한 모피 코트를 여미며, 차갑고 우아한 목소리로 대꾸한다.", pChange: 2, cChange: -2, sChange: 1 },
                    { text: "B. 존을 향해 섰던 몸을 돌려, 열린 창문 근처에 선 아이린의 곁으로 바짝 다가가 선다.", pChange: -2, cChange: 2, sChange: -2 }
                ]
            }
        ];`;

if (htmlContent.includes(clareQuestionsOldPattern)) {
    htmlContent = htmlContent.replace(clareQuestionsOldPattern, clareQuestionsNew);
    console.log("Successfully updated clareQuestions array!");
} else {
    // Fallback if formatting differed slightly
    console.log("Warning: Exact old clareQuestions pattern not found, trying fuzzy match...");
    const regex = /const clareQuestions = \[\s*\{[\s\S]*?\}\s*\];/;
    if (regex.test(htmlContent)) {
        htmlContent = htmlContent.replace(regex, clareQuestionsNew);
        console.log("Successfully updated clareQuestions array via Regex!");
    } else {
        console.error("Error: Could not find clareQuestions array block!");
        process.exit(1);
    }
}

// 2. Update goBackFromPlay reset values (from 50 to 0)
const oldReset = `clareStats = { P: 50, C: 50, S: 50 };
                clareStatsHistory = [{ P: 50, C: 50, S: 50 }];`;
const newReset = `clareStats = { P: 0, C: 0, S: 0 };
                clareStatsHistory = [{ P: 0, C: 0, S: 0 }];`;

if (htmlContent.includes(oldReset)) {
    htmlContent = htmlContent.replace(oldReset, newReset);
    console.log("Successfully updated clareStats reset values in goBackFromPlay!");
} else {
    console.log("Warning: Reset pattern not found or already updated.");
}

// 3. Update continueToPlay() gauge UI segment
const oldGaugeLayout = `            } else {
                gaugeSec.innerHTML = \`
                    <div class="flex flex-col gap-1 w-full md:w-64 bg-black/40 p-2 border border-white/10 rounded font-sans">
                        <div class="flex items-center justify-between text-[8px] uppercase font-black tracking-widest text-neutral-300">
                            <span>Passing (P)</span>
                            <span id="p-val" class="font-mono text-blue-400">50%</span>
                        </div>
                        <div class="h-1 bg-white/10 relative overflow-hidden mb-1.5">
                            <div id="p-bar" class="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" style="width: 50%"></div>
                        </div>
                        
                        <div class="flex items-center justify-between text-[8px] uppercase font-black tracking-widest text-neutral-300">
                            <span>Community (C)</span>
                            <span id="c-val" class="font-mono text-green-400">50%</span>
                        </div>
                        <div class="h-1 bg-white/10 relative overflow-hidden mb-1.5">
                            <div id="c-bar" class="absolute top-0 left-0 h-full bg-green-500 transition-all duration-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" style="width: 50%"></div>
                        </div>
                        
                        <div class="flex items-center justify-between text-[8px] uppercase font-black tracking-widest text-neutral-300">
                            <span>Security (S)</span>
                            <span id="s-val" class="font-mono text-yellow-400">50%</span>
                        </div>
                        <div class="h-1 bg-white/10 relative overflow-hidden">
                            <div id="s-bar" class="absolute top-0 left-0 h-full bg-yellow-500 transition-all duration-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]" style="width: 50%"></div>
                        </div>
                    </div>
                \`;
            }`;

const newGaugeLayout = `            } else {
                gaugeSec.style.display = 'block';
                gaugeSec.innerHTML = \`
                    <div class="flex flex-col gap-1.5 w-full md:w-64 bg-black/40 p-3 border border-white/10 rounded font-sans">
                        <div class="flex items-center justify-between text-[9px] uppercase font-black tracking-widest text-neutral-300">
                            <span>Passing Attachment (P)</span>
                            <span id="p-val" class="font-mono text-blue-400 font-bold">0</span>
                        </div>
                        <div class="h-1.5 bg-white/10 relative overflow-hidden mb-1.5">
                            <div id="p-bar" class="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" style="width: 50%"></div>
                        </div>
                        
                        <div class="flex items-center justify-between text-[9px] uppercase font-black tracking-widest text-neutral-300">
                            <span>Community Longing (C)</span>
                            <span id="c-val" class="font-mono text-emerald-400 font-bold">0</span>
                        </div>
                        <div class="h-1.5 bg-white/10 relative overflow-hidden mb-1.5">
                            <div id="c-bar" class="absolute top-0 left-0 h-full bg-emerald-500 transition-all duration-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" style="width: 50%"></div>
                        </div>
                        
                        <div class="flex items-center justify-between text-[9px] uppercase font-black tracking-widest text-neutral-300">
                            <span>Stability (S)</span>
                            <span id="s-val" class="font-mono text-amber-400 font-bold">0</span>
                        </div>
                        <div class="h-1.5 bg-white/10 relative overflow-hidden">
                            <div id="s-bar" class="absolute top-0 left-0 h-full bg-amber-500 transition-all duration-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" style="width: 50%"></div>
                        </div>
                    </div>
                \`;
            }`;

if (htmlContent.includes(oldGaugeLayout)) {
    htmlContent = htmlContent.replace(oldGaugeLayout, newGaugeLayout);
    console.log("Successfully updated Clare continueToPlay dashboard gauges!");
} else {
    console.log("Warning: continueToPlay gauge pattern not found.");
}

// 4. Update updateVisuals() mapping logic (-8 to +8 onto 0% to 100%)
const oldUpdateVisuals = `            } else {
                charImg.className = "w-full h-full object-cover transition-all duration-1000 grayscale";
                
                const pBar = document.getElementById('p-bar');
                const pVal = document.getElementById('p-val');
                const cBar = document.getElementById('c-bar');
                const cVal = document.getElementById('c-val');
                const sBar = document.getElementById('s-bar');
                const sVal = document.getElementById('s-val');
                
                if (pBar) pBar.style.width = \`\${clareStats.P}%\`;
                if (pVal) pVal.innerText = \`\${clareStats.P}%\`;
                if (cBar) cBar.style.width = \`\${clareStats.C}%\`;
                if (cVal) cVal.innerText = \`\${clareStats.C}%\`;
                if (sBar) sBar.style.width = \`\${clareStats.S}%\`;
                if (sVal) sVal.innerText = \`\${clareStats.S}%\`;
            }`;

const newUpdateVisuals = `            } else {
                charImg.className = "w-full h-full object-cover transition-all duration-1000 grayscale";
                
                // Map -8 to +8 scale onto 0% to 100% width
                const pPct = Math.max(0, Math.min(100, Math.round(((clareStats.P + 8) / 16) * 100)));
                const cPct = Math.max(0, Math.min(100, Math.round(((clareStats.C + 8) / 16) * 100)));
                const sPct = Math.max(0, Math.min(100, Math.round(((clareStats.S + 8) / 16) * 100)));
                
                const pBar = document.getElementById('p-bar');
                const pVal = document.getElementById('p-val');
                const cBar = document.getElementById('c-bar');
                const cVal = document.getElementById('c-val');
                const sBar = document.getElementById('s-bar');
                const sVal = document.getElementById('s-val');
                
                const formatVal = (v) => v > 0 ? \`+\${v}\` : \`\${v}\`;
                
                if (pBar) pBar.style.width = \`\${pPct}%\\`;
                if (pVal) pVal.innerText = formatVal(clareStats.P);
                if (cBar) cBar.style.width = \`\${cPct}%\\`;
                if (cVal) cVal.innerText = formatVal(clareStats.C);
                if (sBar) sBar.style.width = \`\${sPct}%\\`;
                if (sVal) sVal.innerText = formatVal(clareStats.S);
            }`;

if (htmlContent.includes(oldUpdateVisuals)) {
    htmlContent = htmlContent.replace(oldUpdateVisuals, newUpdateVisuals);
    console.log("Successfully updated updateVisuals() dashboard gauge mapper!");
} else {
    console.log("Warning: updateVisuals() pattern not found.");
}

// 5. Update showEnding() dynamically (with dynamic tabs selector and text-only layout)
const oldShowEndingIreneSplit = `            if (selectedCharacter === 'IRENE') {
                const cPct = Math.round((ireneStats.C / 7) * 100);
                const sPct = Math.round((ireneStats.S / 6) * 100);
                const rPct = Math.round((ireneStats.R / 8) * 100);
                anxiety = Math.round((cPct + sPct + rPct) / 3);
                document.getElementById('final-score-badge').innerHTML = \`Final Anxiety: <span class="font-black text-red-500 text-base md:text-xl ml-2">\${anxiety}%</span> <span class="text-xs text-neutral-400 ml-2">(C:\${cPct}% S:\${sPct}% R:\${rPct}%)</span>\`;
            } else {
                document.getElementById('final-score-badge').innerHTML = \`Final Stats: <span class="font-black text-blue-400 text-sm ml-2">P:\${clareStats.P}%</span> <span class="font-black text-green-400 text-sm ml-2">C:\${clareStats.C}%</span> <span class="font-black text-yellow-400 text-sm ml-2">S:\${clareStats.S}%</span>\`;
            }`;

const newShowEndingIreneSplit = `            const endingVisual = document.getElementById('ending-visual');
            const scoreBadge = document.getElementById('final-score-badge');

            if (selectedCharacter === 'IRENE') {
                endingVisual.style.display = 'block';
                scoreBadge.style.display = 'block';
                const cPct = Math.round((ireneStats.C / 7) * 100);
                const sPct = Math.round((ireneStats.S / 6) * 100);
                const rPct = Math.round((ireneStats.R / 8) * 100);
                anxiety = Math.round((cPct + sPct + rPct) / 3);
                document.getElementById('final-score-badge').innerHTML = \`Final Anxiety: <span class="font-black text-red-500 text-base md:text-xl ml-2">\${anxiety}%</span> <span class="text-xs text-neutral-400 ml-2">(C:\${cPct}% S:\${sPct}% R:\${rPct}%)</span>\`;
            } else {
                // Hide images and final anxiety badge for Clare text endings
                endingVisual.style.display = 'none';
                scoreBadge.style.display = 'none';
            }`;

if (htmlContent.includes(oldShowEndingIreneSplit)) {
    htmlContent = htmlContent.replace(oldShowEndingIreneSplit, newShowEndingIreneSplit);
    console.log("Successfully adjusted showEnding() split for visual/badge nodes!");
} else {
    console.log("Warning: showEnding Split pattern not found.");
}

// 6. Replace Clare custom endings conditional block inside showEnding()
const oldClareEndingBlock = `            } else {
                // selectedCharacter === 'CLARE'
                let ending = '';
                
                if (clareStats.P >= 3 && clareStats.C >= 3 && clareStats.S <= -2) {
                    ending = 'The Fall';
                } else if (clareStats.P <= 1 && clareStats.C >= 4 && clareStats.S >= -1) {
                    ending = 'Return to Harlem';
                } else if (clareStats.P >= 4 && clareStats.C <= 1 && clareStats.S >= 3) {
                    ending = 'Silent Cell';
                } else if (clareStats.P <= 1 && clareStats.C >= 3 && clareStats.S >= -1 && clareStats.S <= 3) {
                    ending = 'Crossing';
                } else {
                    // Fallback logically to prevent dead-ends
                    if (clareStats.C > clareStats.P) {
                        ending = 'Return to Harlem';
                    } else if (clareStats.P > clareStats.C) {
                        ending = 'Silent Cell';
                    } else {
                        ending = 'The Fall';
                    }
                }

                if (ending === 'The Fall') {
                    // Ending 1: Tragedy Fall (The Fall)
                    endingImg.src = 'ending_a.png';
                    endingSfx.src = 'siren.mp3';
                    document.body.className = "min-h-screen flex flex-col relative transition-all duration-1000 ending-a-bg custom-scroll";
                    html = \`
                        <h2 class="text-[10px] md:text-sm uppercase tracking-[0.5em] text-red-500 font-black font-sans">The Fall</h2>
                        <h3 class="text-4xl md:text-8xl font-black uppercase tracking-widest leading-tight font-sans">THE FALL</h3>
                        <p class="text-sm md:text-2xl italic leading-relaxed opacity-80 px-4 md:px-0 text-left md:text-center font-sans">
                            혼란스러운 상황 속에서 CLARE는 창밖으로 추락한다.<br>
                            사고였을까, 아니면...?<br>
                            사이렌 소리만이 멀리서 울려 퍼진다.<br><br>
                            …하지만 이것이 끝이라고 확신할 수 있나요?<br><br>
                            당신이 본 것은 단지 ‘패싱’의 일부일지도 모릅니다.<br>
                            숨겨진 진실과 마지막 결말이 궁금하다면 아래 링크를 통해 직접 확인해보세요.
                        </p>
                        <div class="pt-8">
                            <a href="https://product.kyobobook.co.kr/detail/S000000781087" target="_blank" class="inline-block px-8 py-3 bg-white hover:bg-neutral-200 text-black font-bold rounded-full transition-all shadow-lg hover:shadow-white/50 uppercase tracking-widest text-sm font-sans">
                                진실된 결말 보러가기
                            </a>
                        </div>
                    \`;
                } else if (ending === 'Return to Harlem') {
                    // Ending 2: Return to Harlem
                    endingImg.src = 'ending_b.png';
                    endingSfx.src = 'woman.mp3';
                    document.body.className = "min-h-screen flex flex-col relative transition-all duration-1000 ending-b-bg custom-scroll";
                    html = \`
                        <h2 class="text-[10px] md:text-sm uppercase tracking-[0.5em] text-purple-400 font-black font-sans">Return to Harlem</h2>
                        <h3 class="text-4xl md:text-8xl font-black uppercase tracking-widest leading-tight font-sans">RETURN TO HARLEM</h3>
                        <p class="text-sm md:text-2xl italic leading-relaxed opacity-80 px-4 md:px-0 text-left md:text-center font-sans">
                            당신은 백인으로서의 가짜 삶을 던져버리고 흑인 공동체로 완전히 돌아옵니다.<br>
                            존과의 파국을 피할 수 없었지만, 마침내 온전한 자신으로 숨을 쉴 수 있게 되었습니다.<br><br>
                            과거에 누렸던 백인 사회의 화려한 특권에 대한 쓸쓸한 미련이 마음에 남지만, 당신은 공동체와 자신의 정체성에 더 큰 가치를 두기로 선택했습니다.<br>
                            하지만 앞으로 마주해야 할 냉혹한 현실의 파도는 여전히 차갑고 무겁습니다.
                        </p>
                        <div class="pt-8">
                            <a href="https://product.kyobobook.co.kr/detail/S000000781087" target="_blank" class="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-purple-500/50 uppercase tracking-widest text-sm font-sans">
                                진실된 결말 보러가기
                            </a>
                        </div>
                    \`;
                } else if (ending === 'Silent Cell') {
                    // Ending 3: Silent Cell (계속 패싱)
                    endingImg.src = 'ending_c.png';
                    endingSfx.src = 'calm.mp3';
                    document.body.className = "min-h-screen flex flex-col relative transition-all duration-1000 ending-c-bg custom-scroll";
                    html = \`
                        <h2 class="text-[10px] md:text-sm uppercase tracking-[0.5em] text-neutral-400 font-black font-sans">Silent Cell</h2>
                        <h3 class="text-4xl md:text-8xl font-black uppercase tracking-widest leading-tight font-sans">SILENT CELL</h3>
                        <p class="text-sm md:text-2xl italic leading-relaxed opacity-80 px-4 md:px-0 text-left md:text-center font-sans">
                            당신은 백인으로서의 삶을 완벽하게 선택하여 자신의 특권과 안전을 지켜내는 데 성공합니다.<br>
                            그러나 겉보기의 평온함과 높은 사회적 안정(Stability) 속에 감춰진 가짜 삶은 당신을 끊임없는 내면의 소외와 외로움으로 몰아넣습니다.<br><br>
                            완벽하게 다려진 옷을 입고 숨죽여 살아가는 화려한 유리 감옥, 그것은 진정한 행복일까요?
                        </p>
                        <p class="text-xs md:text-lg opacity-40 pt-6 md:pt-12 uppercase tracking-[0.2em] font-sans text-center">Still in the same world.</p>
                    \`;
                } else {
                    // Ending 4: Crossing (교차 엔딩)
                    endingImg.src = 'ending_c.png';
                    endingSfx.src = 'calm.mp3';
                    document.body.className = "min-h-screen flex flex-col relative transition-all duration-1000 ending-c-bg custom-scroll";
                    html = \`
                        <h2 class="text-[10px] md:text-sm uppercase tracking-[0.5em] text-blue-400 font-black font-sans">Crossing</h2>
                        <h3 class="text-4xl md:text-8xl font-black uppercase tracking-widest leading-tight font-sans">CROSSING</h3>
                        <p class="text-sm md:text-2xl italic leading-relaxed opacity-80 px-4 md:px-0 text-left md:text-center font-sans">
                            클레어는 자신의 정체성을 찾아 흑인 공동체로 돌아가기로 결정하지만, 아이린은 오히려 억눌려 있던 불안 끝에 자신의 과거를 묻고 완벽한 패싱의 삶을 살기로 결심합니다.<br><br>
                            서로 다른 방향의 경계를 교차하여 엇갈린 두 사람의 운명.<br>
                            한 사람은 억압 속의 자유를 찾아, 다른 한 사람은 자유 속의 안전한 감옥을 찾아 떠납니다.
                        </p>
                        <p class="text-xs md:text-lg opacity-40 pt-6 md:pt-12 uppercase tracking-[0.2em] font-sans text-center">Intercrossed Destinies.</p>
                    \`;
                }
            }`;

const newClareEndingBlock = `            } else {
                // selectedCharacter === 'CLARE'
                // Define Clare's three premium text-only endings
                const clareEndings = {
                    'passing': {
                        title: "계속 패싱",
                        engTitle: "PASSING",
                        bgClass: "ending-c-bg",
                        sfx: "calm.mp3",
                        desc: "Clare는 계속해서 자신의 과거를 숨긴 채, 패싱한 삶을 선택한다.\\n그 누구도 그녀의 진실을 알지 못하지만, 끊임없는 불안이 따라온다.\\n숨기는 삶은 안전할수록 더욱 위태로워진다.\\n\\n…당신은 끝까지 자신의 진짜 모습을 감출 수 있나요?\\n\\n당신이 본 것은 단지 ‘패싱’의 일부일지도 모릅니다.\\n숨겨진 진실과 마지막 결말이 궁금하다면 아래 링크를 통해 직접 확인해보세요."
                    },
                    'return': {
                        title: "흑인 공동체 귀환",
                        engTitle: "RETURN TO HARLEM",
                        bgClass: "ending-b-bg",
                        sfx: "woman.mp3",
                        desc: "Clare는 패싱을 멈춘 후 흑인 공동체로 돌아간다.\\n따스한 햇살, 익숙한 재즈 음악..\\n\\n…하지만 이것이 행복이라고 확신할 수 있나요?\\n\\n당신이 본 것은 단지 ‘패싱’의 일부일지도 모릅니다.\\n숨겨진 진실과 마지막 결말이 궁금하다면 아래 링크를 통해 직접 확인해보세요."
                    },
                    'the_fall': {
                        title: "원작 비극 엔딩",
                        engTitle: "THE FALL",
                        bgClass: "ending-a-bg",
                        sfx: "siren.mp3",
                        desc: "혼란스러운 상황 속에서 CLARE는 창밖으로 추락한다.\\n사고였을까, 아니면...?\\n사이렌 소리만이 멀리서 울려 퍼진다.\\n\\n…하지만 이것이 끝이라고 확신할 수 있나요?\\n\\n당신이 본 것은 단지 ‘패싱’의 일부일지도 모릅니다.\\n숨겨진 진실과 마지막 결말이 궁금하다면 아래 링크를 통해 직접 확인해보세요."
                    }
                };

                // 1. Core routing matrix based on S, C, P scores
                let targetEndingKey = '';
                if (clareStats.P >= 4 && clareStats.C <= 1 && clareStats.S >= 3) {
                    targetEndingKey = 'passing';
                } else if (clareStats.P <= 1 && clareStats.C >= 4 && clareStats.S >= -1 && clareStats.S <= 2) {
                    targetEndingKey = 'return';
                } else if (clareStats.P >= 4 && clareStats.C >= 3 && clareStats.S <= -2) {
                    targetEndingKey = 'the_fall';
                } else {
                    // Sophisticated logical fallback mapper
                    if (clareStats.S <= -2) {
                        targetEndingKey = 'the_fall';
                    } else if (clareStats.C >= clareStats.P) {
                        targetEndingKey = 'return';
                    } else {
                        targetEndingKey = 'passing';
                    }
                }

                // 2. Interactive tab switcher so the user can easily preview all three text endings
                window.changeClareEnding = function(key) {
                    const data = clareEndings[key];
                    if (!data) return;

                    // Play correct sound effect
                    endingSfx.pause();
                    endingSfx.src = data.sfx;
                    endingSfx.play().catch(e => console.error("Ending BGM switch failed:", e));

                    // Transition body background smoothly
                    document.body.className = "min-h-screen flex flex-col relative transition-all duration-1000 " + data.bgClass + " custom-scroll";

                    // Update dynamic tab buttons styling
                    document.querySelectorAll('.clare-tab-btn').forEach(btn => {
                        if (btn.getAttribute('data-key') === key) {
                            btn.className = "clare-tab-btn px-6 py-2.5 bg-white text-black border border-white font-bold text-xs md:text-sm uppercase tracking-widest transition-all rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)]";
                        } else {
                            btn.className = "clare-tab-btn px-6 py-2.5 bg-black/40 text-white/60 border border-white/20 hover:text-white hover:border-white/50 font-medium text-xs md:text-sm uppercase tracking-widest transition-all rounded-full";
                        }
                    });

                    // Render gorgeous typography layout
                    document.getElementById('clare-ending-body').innerHTML = \`
                        <h2 class="text-[10px] md:text-sm uppercase tracking-[0.5em] text-red-500/80 font-black font-sans mb-2 animate-fade-in">\${data.title}</h2>
                        <h3 class="text-4xl md:text-7xl font-black uppercase tracking-[0.2em] leading-none font-sans mb-8 text-white animate-fade-in">\${data.engTitle}</h3>
                        <div class="w-24 h-[1px] bg-white/20 mx-auto mb-10"></div>
                        <p class="text-sm md:text-2xl italic leading-loose opacity-95 px-6 md:px-0 text-left md:text-center font-sans max-w-3xl mx-auto whitespace-pre-line text-neutral-200">
                            \${data.desc}
                        </p>
                        <div class="pt-12 animate-fade-in">
                            <a href="https://product.kyobobook.co.kr/detail/S000000781087" target="_blank" class="inline-block px-10 py-4.5 bg-white hover:bg-neutral-200 text-black font-black rounded-full transition-all shadow-[0_4px_25px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_35px_rgba(255,255,255,0.45)] uppercase tracking-[0.2em] text-[10px] md:text-xs font-sans">
                                진실된 결말 보러가기
                            </a>
                        </div>
                    \`;
                };

                // Render main container structure with top interactive switcher buttons
                html = \`
                    <div class="text-[10px] uppercase tracking-widest text-neutral-400/60 font-sans mb-4">Interactive Ending Switcher</div>
                    <div class="w-full max-w-2xl mx-auto mb-12 flex flex-wrap justify-center gap-3 relative z-[100]">
                        <button onclick="changeClareEnding('passing')" data-key="passing" class="clare-tab-btn px-6 py-2.5 bg-white text-black border border-white font-bold text-xs md:text-sm uppercase tracking-widest transition-all rounded-full">계속 패싱</button>
                        <button onclick="changeClareEnding('return')" data-key="return" class="clare-tab-btn px-6 py-2.5 bg-black/40 text-white/60 border border-white/20 hover:text-white hover:border-white/50 font-medium text-xs md:text-sm uppercase tracking-widest transition-all rounded-full">흑인 공동체 귀환</button>
                        <button onclick="changeClareEnding('the_fall')" data-key="the_fall" class="clare-tab-btn px-6 py-2.5 bg-black/40 text-white/60 border border-white/20 hover:text-white hover:border-white/50 font-medium text-xs md:text-sm uppercase tracking-widest transition-all rounded-full">원작 비극 엔딩</button>
                    </div>
                    <div id="clare-ending-body" class="space-y-6"></div>
                \`;

                content.innerHTML = html;

                // Fire initial tab display based on matrix score routing
                setTimeout(() => {
                    window.changeClareEnding(targetEndingKey);
                }, 50);
                return;
            }`;

if (htmlContent.includes(oldClareEndingBlock)) {
    htmlContent = htmlContent.replace(oldClareEndingBlock, newClareEndingBlock);
    console.log("Successfully replaced Clare custom ending conditional block!");
} else {
    console.log("Warning: Clare custom ending conditional block not found.");
}

// 7. Write modified HTML back
fs.writeFileSync(htmlPath, htmlContent, 'utf8');
console.log("Successfully wrote all updates to index.html!");
