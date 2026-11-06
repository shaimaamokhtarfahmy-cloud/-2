// ==========================================
// ⬇️ متن الجزرية كاملاً مدمجاً داخل المنهج الدراسي ⬇️
// عدد الأقفال على الباب يتم حسابه تلقائياً بناءً على عدد الأسئلة في كل درس.
// ==========================================
const syllabus = [
  {
    chapter: "الفصل الأول: المقدمة والمخارج والصفات",
    branches: [
      {
        title: "1. المقدمة",
        lesson: "📜 الأبيات (1 - 8): يقول راجي عفو رب سامع محمد بن الجزري الشافعي، الحمد لله وصلى الله على نبيه ومصطفاه.. إذ واجب عليهم محتم قبل الشروع أولاً أن يعلموا مخارج الحروف والصفات ليلفظوا بأفصح اللغات.",
        questions: [
          { q: "ما الذي يجب على القارئ معرفته قبل الشروع في القراءة؟", options: ["مخارج الحروف والصفات", "عدد آيات السور", "تاريخ جمع المصحف"], a: "مخارج الحروف والصفات" },
          { q: "ما اللقب الفقهي للناظم الإمام محمد بن الجزري؟", options: ["المالكي", "الحنبلي", "الشافعي"], a: "الشافعي" }
        ]
      },
      {
        title: "2. مخارج الحروف",
        lesson: "📜 الأبيات (9 - 19): مخارج الحروف سبعة عشر على الذي يختاره من اختبر، للجوف ألف وأختاها وهي حروف مد للهواء تنتهي، ثم لأقصى الحلق همز هاء، ومن وسطه فعين حاء، أدناه غين خاؤها.. ومخرج الغنة هو الخيشوم.",
        questions: [
          { q: "كم عدد مخارج الحروف على الرأي المختار في المتن؟", options: ["14 مخرجاً", "16 مخرجاً", "17 مخرجاً"], a: "17 مخرجاً" },
          { q: "ما هو مخرج الغنة كما ورد في ختام الباب؟", options: ["الخيشوم", "الجوف", "الشفتان"], a: "الخيشوم" },
          { q: "ما هي الحروف التي تخرج من الجوف وتنتهي للهواء؟", options: ["حروف المد", "حروف الحلق", "حروف الصفير"], a: "حروف المد" }
        ]
      },
      {
        title: "3. صفات الحروف",
        lesson: "📜 الأبيات (20 - 26): صفاتها جهر ورخو مستفل منفتح مصمتة والضد قل، مهموسها (فحثه شخص سكت)، شديدها لفظ (أجد قط بكت)، وبين رخو والشديد (لين عمر)، وسبع علو (خص ضغط قظ حصر)، وقلقلة (قطب جد).",
        questions: [
          { q: "أي مما يلي يجمع حروف الهمس؟", options: ["أجد قط بكت", "فحثه شخص سكت", "قطب جد"], a: "فحثه شخص سكت" },
          { q: "ما هي العبارة التي تجمع حروف القلقلة؟", options: ["لين عمر", "خص ضغط قظ", "قطب جد"], a: "قطب جد" }
        ]
      }
    ]
  },
  {
    chapter: "الفصل الثاني: أحكام التجويد والراءات واللامات",
    branches: [
      {
        title: "1. التجويد والتفخيم",
        lesson: "📜 الأبيات (27 - 40): والأخذ بالتجويد حتم لازم من لم يصحح القرآن آثم؛ لأنه به الإله أنزلا.. فرققن مستفلاً من أحرف وحاذرن تفخيم لفظ الألف، وبينن مقلقلاً إن سكنا وإن يكن في الوقف كان أبينا.",
        questions: [
          { q: "ما حكم الأخذ بالتجويد في المنظومة؟", options: ["مستحب", "حتم لازم", "سنة مؤكدة"], a: "حتم لازم" },
          { q: "متى يكون الحرف المقلقل (أبين) في النطق؟", options: ["إذا كان مفتوحاً", "في حالة الوقف", "إذا كان مشدداً في أول الكلمة"], a: "في حالة الوقف" }
        ]
      },
      {
        title: "2. الراءات واللامات",
        lesson: "📜 الأبيات (41 - 51): ورقق الراء إذا ما كسرت كذاك بعد الكسر حيث سكنت إن لم تكن من قبل حرف استعلا.. وفخم اللام من اسم الله عن فتح أو ضم كعبد الله، وأولى مثل وجنس إن سكن أدغم كقل رب.",
        questions: [
          { q: "متى تفخم اللام في اسم الله (لَفْظ الجلالة)؟", options: ["بعد الكسر", "عن فتح أو ضم", "دائماً ترقق"], a: "عن فتح أو ضم" },
          { q: "ما الحكم إذا التقى حرفان متماثلان أو متجانسان وأولهما ساكن (مثل: قل رب)؟", options: ["الإظهار", "الإخفاء", "الإدغام"], a: "الإدغام" }
        ]
      }
    ]
  },
  {
    chapter: "الفصل الثالث: الضاد والظاء وأحكام النون والميم",
    branches: [
      {
        title: "1. الضاد والظاء والتحذيرات",
        lesson: "📜 الأبيات (52 - 61): والضاد باستطالة ومخرج ميز من الظاء.. وإن تلاقيا البيان لازم مثل (أنقض ظهرك) (يعض الظالم) واضطر مع وعظت مع أفضتم.",
        questions: [
          { q: "بأي صفة ميز الناظم حرف الضاد عن حرف الظاء؟", options: ["بالقلقلة", "بالاستطالة", "بالتكرير"], a: "بالاستطالة" },
          { q: "ما الحكم الواجب إذا التقت الضاد بالظاء مثل (أنقض ظهرك)؟", options: ["البيان (الإظهار)", "الإدغام", "الإخفاء"], a: "البيان (الإظهار)" }
        ]
      },
      {
        title: "2. أحكام النون والميم والمد",
        lesson: "📜 الأبيات (62 - 72): وأظهر الغنة من نون ومن ميم إذا ما شددا، وحكم تنوين ونون يلفى: إظهار ادغام وقلب إخفا.. والمد لازم وواجب أتى وجائز وهو وقصر ثبتا.",
        questions: [
          { q: "ما هي أحكام النون الساكنة والتنوين الأربعة؟", options: ["المد والقصر والوقف والابتداء", "إظهار وإدغام وقلب وإخفاء", "التفخيم والترقيق والجهر والهمس"], a: "إظهار وإدغام وقلب وإخفاء" },
          { q: "ما مقدار غنة النون والميم المشددتين؟", options: ["الإظهار بدون غنة", "إظهار الغنة", "الإخفاء الشفوي"], a: "إظهار الغنة" }
        ]
      }
    ]
  },
  {
    chapter: "الفصل الرابع: الوقوف والمقطوع والموصول والخاتمة",
    branches: [
      {
        title: "1. معرفة الوقوف والتاءات",
        lesson: "📜 الأبيات (73 - 100): وبعد تجويدك للحروف لا بد من معرفة الوقوف والابتداء وهي تقسم إذن ثلاثة: تام وكاف وحسن.. واعرف لمقطوع وموصول وتا في المصحف الإمام.",
        questions: [
          { q: "إلى كم قسم يقسم الوقف الصحيح في المنظومة؟", options: ["قسمين", "ثلاثة أقسام (تام وكاف وحسن)", "خمسة أقسام"], a: "ثلاثة أقسام (تام وكاف وحسن)" },
          { q: "ما الكلمة التي كتبت بالتاء المفتوحة (رسمت بتاء زبره) في سورة الزخرف؟", options: ["نعمت", "رحمت", "شجرت"], a: "رحمت" }
        ]
      },
      {
        title: "2. همز الوصل والخاتمة",
        lesson: "📜 الأبيات (101 - 109): وابدأ بهمز الوصل من فعل بضم إن كان ثالث من الفعل يضم، واكسره حال الكسر والفتح.. وقد تقفى نظمي المقدمة مني لقارئ القرآن تقدمه، أبياتها قاف وزاي في العدد.",
        questions: [
          { q: "ما هي حركة همز الوصل عند البدء بفعل ثالثه مضموم ضماً أصلياً؟", options: ["الكسر", "الفتح", "الضم"], a: "الضم" },
          { q: "كم عدد أبيات منظومة المقدمة الجزرية بحساب الجمل (قاف وزاي)؟", options: ["107 بيتًا", "109 بيتًا", "100 بيتًا"], a: "107 بيتًا" }
        ]
      }
    ]
  }
];

let cIdx = 0;
let bIdx = 0;
let qIdx = 0;
let needsLesson = true;
let totalLocks = 0;
let locksBroken = 0;

window.onload = () => {
  populateIndex();
  setupDoorsAndLocks();
};

function populateIndex() {
  const select = document.getElementById('lesson-index');
  if(!select) return;
  select.innerHTML = '';
  syllabus.forEach((chap, cIndex) => {
    let optGroup = document.createElement('optgroup');
    optGroup.label = chap.chapter;
    chap.branches.forEach((branch, bIndex) => {
      let opt = document.createElement('option');
      opt.value = `${cIndex}-${bIndex}`;
      opt.innerText = branch.title;
      optGroup.appendChild(opt);
    });
    select.appendChild(optGroup);
  });
}

function setupDoorsAndLocks() {
  const leftDoor = document.getElementById('left-door');
  const rightDoor = document.getElementById('right-door');
  const nextBg = document.getElementById('next-room-bg');
  
  if(leftDoor) leftDoor.classList.remove('open-left');
  if(rightDoor) rightDoor.classList.remove('open-right');
  if(nextBg) nextBg.style.opacity = '0';
  
  totalLocks = syllabus[cIdx].branches[bIdx].questions.length;
  locksBroken = 0;
  
  const locksLeftLabel = document.getElementById('locks-left');
  if(locksLeftLabel) locksLeftLabel.innerText = totalLocks;
  
  const locksContainer = document.getElementById('locks-container');
  if(locksContainer) {
    locksContainer.innerHTML = '';
    for (let i = 0; i < totalLocks; i++) {
      const lock = document.createElement('div');
      lock.className = 'padlock';
      lock.id = `lock-${i}`;
      lock.innerText = '🔒';
      locksContainer.appendChild(lock);
    }
  }
}

function jumpToLesson() {
  const selectIndex = document.getElementById('lesson-index');
  if(!selectIndex) return;
  const val = selectIndex.value;
  const [c, b] = val.split('-');
  cIdx = parseInt(c);
  bIdx = parseInt(b);
  qIdx = 0;
  needsLesson = true;
  setupDoorsAndLocks();
  showFeedback("دخلت غرفة جديدة في قلعة الجزرية! 🏰");
}

function drawQuestion() {
  if (cIdx >= syllabus.length) {
    alert("🏆 مبرووووك! لقد هربت من قلعة الجزرية بنجاح وأتقنت أحكام التجويد والمنظومة بالكامل!");
    return;
  }
  const selectIndex = document.getElementById('lesson-index');
  if(selectIndex) selectIndex.value = `${cIdx}-${bIdx}`;
  
  if (needsLesson) showLessonUI(false);
  else showQuestion();
}

function showLessonUI(isRetry) {
  const branchData = syllabus[cIdx].branches[bIdx];
  const lessonTitle = document.getElementById('lesson-title');
  const lessonText = document.getElementById('lesson-text');
  
  if(lessonTitle) lessonTitle.innerText = branchData.title;
  let textToShow = branchData.lesson;
  
  if (isRetry && lessonTitle) {
    lessonTitle.innerText = "👻 ظهر شبح القلعة!";
    textToShow = "إجابة خاطئة! الشبح يطلب منك قراءة أبيات المتن لتتمكن من فك القفل:\n\n" + textToShow;
  }
  
  if(lessonText) lessonText.innerText = textToShow;
  
  document.getElementById('lesson-section')?.classList.remove('hidden');
  document.getElementById('question-section')?.classList.add('hidden');
  document.getElementById('quiz-modal')?.classList.remove('hidden');
}

function showQuestion() {
  const chapterData = syllabus[cIdx];
  const branchData = chapterData.branches[bIdx];
  const questionData = branchData.questions[qIdx];
  
  const cbLabel = document.getElementById('chapter-branch-label');
  const qCounter = document.getElementById('question-counter');
  const qText = document.getElementById('question-text');
  
  if(cbLabel) cbLabel.innerText = `${chapterData.chapter} - ${branchData.title}`;
  if(qCounter) qCounter.innerText = `البحث عن المفتاح ${qIdx + 1} من ${totalLocks}`;
  if(qText) qText.innerText = questionData.q;
  
  const optionsDiv = document.getElementById('options');
  if(optionsDiv) {
    optionsDiv.innerHTML = '';
    questionData.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'opt-btn';
      btn.innerText = opt;
      btn.onclick = () => checkAnswer(opt, questionData.a);
