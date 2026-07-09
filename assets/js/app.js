const latestPostUrl = "https://www.facebook.com/sehawaili";

const congratulationsUrl = "https://www.facebook.com/share/p/1Fk5bdv6X9/";

const achievementsUrl = "https://www.facebook.com/share/v/18FU3okutN/";

const officeBaseServices = ["birth", "death", "family-planning", "vaccination-table", "hospitals", "full-guide"];

const hospitalsByOffice = {
  demerdash: [
    ["مستشفى الدمرداش", "56 شارع رمسيس، حي العباسية، القاهرة"],
    ["مستشفى دار الشفاء", "375 شارع رمسيس، العباسية، القاهرة"],
    ["مستشفى واحة الطب", "19 شارع مصر والسودان، امتداد أحمد سعيد، حدائق القبة، القاهرة"]
  ],
  zaher: [
    ["مستشفى السلام التخصصى", "أبو خودة، حي الظاهر، مدينة السلام، القاهرة"],
    ["مستشفى النزهة", "2 النزهة، السكاكيني، حي الظاهر، القاهرة"],
    ["مستشفى الأمل", "10 ركن الريس، القبيسي، حي الظاهر، القاهرة"]
  ],
  abbassia: [
    ["مستشفى عين شمس التخصصى", "2 شارع الخليفة المأمون، العباسية، بجوار كلية التجارة عين شمس"],
    ["مستشفى الزهراء الجامعى", "شارع المستشفى اليوناني، السرايات، الوايلي، القاهرة"],
    ["مستشفى الايطالى", "17 شارع السرايات، العباسية، القاهرة"],
    ["مستشفى اليونانى", "أحمد فؤاد عبد العزيز، السرايات، الوايلي، القاهرة"],
    ["مستشفى اركان التخصصى", "126 أمام محطة مترو العباسية، القاهرة"],
    ["مستشفى الجوى العام", "شارع أحمد سعيد، العباسية، الوايلي، القاهرة"]
  ]
};

const platformData = {
  units: [
    {
      id: "demerdash",
      type: "office",
      title: "صحة الدمرداش",
      subtitle: "تسجيل مواليد ووفيات وتطعيمات وخدمات الأسرة",
      icon: "✚",
      locationTitle: "نطاق مكتب صحة الدمرداش للحالات المنزلية",
      services: officeBaseServices
    },
    {
      id: "abbassia",
      type: "office",
      title: "صحة العباسية",
      subtitle: "مكتب صحة ومركز التحصين المعتمد بمنطقة الوايلي",
      icon: "◆",
      locationTitle: "نطاق مكتب صحة العباسية للحالات المنزلية",
      services: [...officeBaseServices, "immunization", "vaccine-prices", "covid-recovery", "hepatitis-b-mothers"]
    },
    {
      id: "zaher",
      type: "office",
      title: "صحة الظاهر",
      subtitle: "تسجيل مواليد ووفيات وتطعيمات وخدمات الأسرة",
      icon: "◇",
      locationTitle: "نطاق مكتب صحة الظاهر للحالات المنزلية",
      services: officeBaseServices
    },
    {
      id: "child-abbassia",
      type: "care",
      title: "رعاية طفل العباسية",
      subtitle: "خدمات طفل وأسرة ومعمل وعلاج طبيعي",
      icon: "♧",
      locationTitle: "خريطة رعاية طفل العباسية",
      services: ["child-abbassia-about", "formula", "marriage-check", "dentistry", "lab", "family-medicine", "family-planning-care", "physical-therapy"]
    },
    {
      id: "child-zaher",
      type: "care",
      hidden: true,
      title: "رعاية طفل الظاهر",
      subtitle: "تطعيمات وطب أسرة وأسنان ومعمل",
      icon: "♡",
      locationTitle: "خريطة رعاية طفل الظاهر",
      services: ["child-zaher-about", "vaccination-care", "dentistry", "lab", "family-medicine", "family-planning-care"]
    },
    {
      id: "dermatology",
      type: "care",
      title: "عيادة الجلدية",
      subtitle: "جلدية وتدخلات علاجية ومعمل وعلاج طبيعي",
      icon: "✦",
      locationTitle: "خريطة عيادة الجلدية",
      services: ["derma-about", "interventions", "soft-laser", "electrocautery", "uvb", "derma-lab", "derma-physical"]
    }
  ],
  services: {
    birth: officialService({
      title: "تسجيل المواليد",
      description: "تسجيل شهادة الميلاد لأول مرة من خلال مكتب الصحة المختص، مع إرسال البيانات لمصلحة الأحوال المدنية لإصدار الشهادة المميكنة.",
      duration: "يفضل خلال 15 يومًا من تاريخ الولادة",
      requirements: [
        "إخطار الولادة الصادر من المستشفى أو الطبيب المعتمد من وزارة الصحة.",
        "بطاقة الرقم القومي للأب والأم أو ما يثبت شخصيتهما.",
        "قسيمة الزواج أو ما يثبت الحالة الزوجية للوالدين."
      ],
      steps: [
        "يتوجه ولي الأمر إلى مكتب الصحة التابع له مكان الولادة.",
        "تقديم إخطار الولادة والمستندات المطلوبة لموظف الميكنة.",
        "تسجيل بيانات المولود الأساسية ومراجعتها.",
        "إرسال البيانات لمصلحة الأحوال المدنية ثم تسليم الشهادة بعد المراجعة."
      ],
      notes: [
        "لا يتم استلام إخطار ولادة غير معتمد من جهة طبية رسمية.",
        "التسجيل المبكر يحمي الأسرة من التأخير أو الإجراءات الإضافية.",
        "الخدمة متاحة وفق مواعيد العمل بالمكتب."
      ],
      pdf: "assets/docs/demerdash-birth-registration.pdf"
    }),
    death: officialService({
      title: "تسجيل الوفيات",
      description: "تسجيل شهادة الوفاة لأول مرة من خلال مكتب الصحة المختص، مع الحفاظ على سرية البيانات وتسليم الشهادة للمستحقين فقط.",
      duration: "خلال 24 ساعة من حدوث الوفاة",
      requirements: [
        "إخطار الوفاة الصادر من المستشفى أو الطبيب المعتمد.",
        "بطاقة الرقم القومي للمتوفى أو شهادة ميلاد مميكنة.",
        "بطاقة الرقم القومي لمبلّغ حالة الوفاة."
      ],
      steps: [
        "يتوجه المبلّغ إلى مكتب الصحة التابع له مكان الوفاة.",
        "تقديم الإخطار والمستندات لموظف الميكنة.",
        "تسجيل بيانات المتوفى ومراجعة سبب ومحل الوفاة.",
        "تسليم الشهادة بعد المراجعة لأقارب الدرجة الأولى فقط."
      ],
      notes: [
        "يُحظر تسليم شهادات الوفاة لغير أقارب الدرجة الأولى.",
        "للمتوفى المتزوج: الأب، الأم، الزوج، الزوجة، الأبناء.",
        "لغير المتزوج: الأب، الأم، الأخ، الأخت، مع إثبات الحالة عند الحاجة."
      ]
    }),
    "family-planning": adviceService({
      title: "تنظيم الأسرة",
      description: "خدمة متكاملة لرعاية صحة المرأة والطفل، وتقديم وسائل آمنة لتنظيم النسل تحت إشراف طبي.",
      lead: "تنظيم الأسرة مش ورقة أو إجراء. دي مساحة آمنة للسيدة تسأل وتفهم وتختار الوسيلة الأنسب لصحتها وظروفها، مع متابعة طبية تحميها من المضاعفات.",
      points: [
        "استشارات طبية مجانية حول أنسب وسائل تنظيم الأسرة.",
        "صرف الوسائل تحت إشراف الطبيب: حبوب، حقن، لولب، كبسولات.",
        "متابعة ما بعد استخدام الوسيلة والتوعية بالرضاعة الطبيعية والتغذية.",
        "الكشف المبكر والمشاركة في حملات صحة المرأة."
      ],
      caution: "لا تستخدمي أي وسيلة بدون استشارة الطبيب المختص داخل الوحدة."
    }),
    "vaccination-table": adviceService({
      title: "جدول التطعيمات",
      description: "متابعة التطعيمات الأساسية والروتينية للأطفال من الولادة وحتى عمر عام ونصف طبقًا لجدول وزارة الصحة.",
      lead: "التطعيمات هي درع الحماية الأول لطفلك. التأخير مش مجرد نسيان ميعاد، لكنه ممكن يعرّض الطفل لمخاطر صحية وقانونية كان ممكن نتجنبها بسهولة.",
      points: [
        "تنفيذ برامج التطعيم القومي للأطفال.",
        "تسجيل بيانات التطعيم ورقيًا وإلكترونيًا.",
        "إصدار كروت التطعيم ومتابعة الجرعات التالية.",
        "متابعة الأطفال المتخلفين عن التطعيم والتواصل مع الأسر."
      ],
      caution: "طفلكم أمانة بين أيدينا جميعًا، والالتزام بالمواعيد يحميه ويحمي المجتمع."
    }),
    hospitals: {
      title: "المستشفيات التابعة",
      description: "قائمة المستشفيات التابعة للمكتب المختار مع العناوين بشكل واضح وسهل القراءة.",
      kind: "hospitals"
    },
    "full-guide": officialService({
      title: "دليل الخدمات الكامل",
      description: "مساحة جاهزة لملف الدليل الكامل لكل مكتب، ويمكن ربطها لاحقًا بملف Google Drive الرسمي.",
      duration: "حسب نوع الخدمة",
      requirements: ["اختيار المكتب المختص.", "فتح الخدمة المطلوبة.", "مراجعة المستندات والتعليمات قبل التوجه للمكتب."],
      steps: ["تصفح الخدمات داخل المنصة.", "افتح صفحة الخدمة الرقمية.", "حمّل الملف الرسمي عند الحاجة."],
      notes: ["سيتم ربط الملف الرسمي بعد اعتماد نسخة الدليل النهائية."]
    }),
    immunization: officialService({
      title: "خدمات التحصين - الحج والعمرة",
      description: "مركز التحصين المعتمد بمنطقة الوايلي داخل مكتب صحة العباسية، ويقدم تحصينات المسافرين والمقيمين طبقًا لتعليمات وزارة الصحة.",
      duration: "لقاح السحائي قبل السفر بما لا يقل عن 10 أيام",
      requirements: [
        "بطاقة الرقم القومي أو جواز السفر للمسافر.",
        "نسخة من حجز السفر أو التأشيرة إن وُجدت.",
        "خطاب الجهة المنظمة في حالة البعثات الرسمية."
      ],
      steps: [
        "الحضور شخصيًا إلى قسم التحصين.",
        "تقديم المستندات لموظف التحصين.",
        "تقييم طبي سريع قبل التطعيم.",
        "إعطاء اللقاح وإصدار شهادة تحصين مختومة رسميًا."
      ],
      notes: [
        "التحصين ليس مجرد شهادة، لكنه حماية للمسافر وأسرته بعد العودة.",
        "احتفظ بالشهادة وصورة منها على الهاتف أثناء السفر.",
        "أخبر الطبيب بأي أمراض مزمنة أو أدوية قبل التطعيم."
      ]
    }),
    "vaccine-prices": {
      title: "الأسعار الرسمية للتطعيمات",
      description: "قائمة الأسعار الرسمية داخل مكتب صحة العباسية - مركز التحصين.",
      kind: "prices",
      prices: [
        ["السحائي الثنائي للعمرة فقط", "مصري / غير مصري", "200 ج"],
        ["السحائي الرباعي للحجاج", "مصري", "670 ج"],
        ["السحائي الرباعي للحجاج", "غير مصري", "800 ج"],
        ["لقاح الإنفلونزا الموسمية", "حسب التوافر", "260 ج"],
        ["لقاح الالتهاب الكبدي B", "مصري - كل جرعة من 3 جرعات", "100 ج"],
        ["لقاح الالتهاب الكبدي B", "غير مصري - كل جرعة من 3 جرعات", "200 ج"]
      ],
      note: "هدف الخدمة الحقيقي هو الوقاية والاطمئنان. نتمنى أن تصل الوقاية لكل الناس بأيسر طريقة ممكنة."
    },
    "covid-recovery": adviceService({
      title: "رسالة إلى كل متعافٍ من فيروس C",
      description: "رسالة توعية للمتعافين من فيروس C بأهمية استكمال الوقاية والحصول على تطعيم فيروس B.",
      lead: "الشفاء ليس نهاية المشوار، لكنه بداية الحفاظ على صحتك وبيتك وكل من تحب. تطعيم فيروس B خطوة صغيرة تمنحك راحة بال كبيرة.",
      points: [
        "التطعيم يساعد في تقليل خطر الإصابة بفيروس B.",
        "الخدمة امتداد لمشوار التعافي وحماية الكبد.",
        "الوقاية عادة وليست رد فعل بعد التعب."
      ],
      caution: "خلي الوقاية عادة، وصحتك نعمة تستحق المتابعة."
    }),
    "hepatitis-b-mothers": officialService({
      title: "مصل فيروس الالتهاب الكبدي B لأطفال الأمهات الحاملات للفيروس",
      description: "مصل وقائي مجاني للأطفال حديثي الولادة لأمهات حاملات لفيروس B، ويُعطى خلال أول 24 ساعة من الولادة.",
      duration: "أول 24 ساعة من الولادة",
      requirements: [
        "نتيجة تحليل Hbs Ag للأم أو شهادة طبية تثبت حملها للفيروس.",
        "أن يكون التحليل صادرًا من مستشفى أو جهة حكومية معتمدة."
      ],
      steps: [
        "إبلاغ الفريق الطبي بحالة الأم فور الولادة.",
        "تقديم نتيجة التحليل أو الشهادة الطبية.",
        "صرف المصل من الجهة المعتمدة وإعطاؤه للطفل في الوقت المحدد."
      ],
      notes: [
        "الجرعة في الوقت الصحيح تحمي الطفل من مرض مزمن قد يستمر مدى الحياة.",
        "الخدمة جزء من جهود وزارة الصحة لمنع انتقال العدوى من الأم للطفل."
      ]
    }),
    "child-abbassia-about": adviceService({
      title: "ما هي رعاية طفل العباسية؟",
      description: "رعاية الطفل مساحة متابعة وتوعية للأسرة، وليست مجرد مكان لخدمة واحدة.",
      lead: "هنا الأسرة تلاقي إجابة قريبة ومفهومة: تطعيم، متابعة، نصيحة، أو توجيه للخدمة المناسبة. الهدف إن ولي الأمر يخرج فاهم ومطمئن.",
      points: ["متابعة الطفل والأسرة.", "توعية بمواعيد التطعيمات.", "خدمات معمل وطب أسرة وأسنان.", "توجيه للخدمة الصحيحة بسرعة."]
    }),
    "child-zaher-about": adviceService({
      title: "ما هي رعاية طفل الظاهر؟",
      description: "خدمات رعاية طفل الظاهر مصممة لمساعدة الأسرة على فهم احتياج الطفل الصحي في الوقت المناسب.",
      lead: "الرعاية هنا تبدأ بالمعلومة. لما تفهم الميعاد والخدمة والخطوة الجاية، بتقدر تحمي طفلك من تأخير أو قلق غير ضروري.",
      points: ["تطعيمات ومتابعة.", "طب أسرة وطب أسنان.", "خدمات معملية.", "تنظيم أسرة وتوعية صحية."]
    }),
    formula: adviceService({
      title: "صرف الألبان الصناعية",
      description: "إرشاد الأسرة لشروط وخطوات صرف الألبان الصناعية حسب الضوابط الصحية.",
      lead: "صرف اللبن الصناعي قرار صحي له شروط، والهدف منه دعم الطفل عند وجود احتياج حقيقي وبإشراف مناسب.",
      points: ["مراجعة حالة الطفل.", "توجيه ولي الأمر للمستند المطلوب.", "المتابعة حسب تعليمات الوحدة."]
    }),
    "marriage-check": adviceService({
      title: "فحص المقبلين على الزواج",
      description: "خدمة وقائية تساعد المقبلين على الزواج على الاطمئنان قبل بداية حياة جديدة.",
      lead: "الفحص مش تعقيد، هو خطوة احترام للحياة الجديدة. كل معلومة تعرفها بدري تحميك وتحمي شريكك وأسرتك المستقبلية.",
      points: ["استقبال الحالة.", "إجراء الفحوص المطلوبة.", "شرح النتيجة والتوجيه الصحي المناسب."],
      directUrl: "https://100millionseha.eg/marriage",
      directLabel: "أماكن فحص المقبلين على الزواج"
    }),
    dentistry: videoAdvice("طب الأسنان", "خدمات كشف وتوجيه وعلاج أسنان داخل الرعاية حسب المتاح.", "وجع الأسنان لا ينتظر. الكشف المبكر يوفر ألمًا ومضاعفات، خصوصًا للأطفال وكبار السن."),
    lab: videoAdvice("المعمل", "تحاليل وخدمات معملية تساعد الطبيب على فهم الحالة بشكل أدق.", "التحليل الصحيح في الوقت الصحيح يختصر طريق العلاج ويمنع التخمين."),
    "family-medicine": videoAdvice("طب الأسرة", "متابعة صحية قريبة للأسرة وتوجيه للحالات التي تحتاج رعاية متخصصة.", "طب الأسرة هو الباب الأول للفهم: شكوى بسيطة، قياس، متابعة، أو نصيحة تمنع مشكلة أكبر."),
    "family-planning-care": videoAdvice("تنظيم الأسرة", "توعية واستشارة وصرف وسائل تنظيم الأسرة تحت إشراف طبي.", "اختيار الوسيلة المناسبة يبدأ بسؤال آمن وطبيب يسمع ويفهم ظروف كل سيدة."),
    "physical-therapy": videoAdvice("العلاج الطبيعي", "خدمات علاج طبيعي وإرشادات تساعد على تحسين الحركة وتقليل الألم.", "جلسة العلاج الطبيعي ليست مجرد جهاز، لكنها خطة متابعة وحركة صحيحة داخل البيت."),
    "vaccination-care": videoAdvice("جدول التطعيمات", "متابعة مواعيد التطعيمات وتنبيه ولي الأمر بالجرعات المهمة.", "كل ميعاد تطعيم هو خطوة حماية لطفلك. لا تؤجل الجرعة إلا بتوجيه طبي."),
    "derma-about": adviceService({
      title: "ما هي عيادة الجلدية؟",
      description: "عيادة متخصصة في فحص الحالات الجلدية وتوجيهها للتدخل المناسب.",
      lead: "مش كل مشكلة جلدية تحتاج نفس العلاج. التشخيص الصحيح هو الفرق بين علاج سريع وتعب يتكرر.",
      points: ["كشف وتقييم طبي.", "تدخلات علاجية حسب الحالة.", "إرشاد للعلاج الطبيعي أو المعمل عند الحاجة."]
    }),
    interventions: adviceService({
      title: "خدمات التدخلات العلاجية",
      description: "تدخلات علاجية جلدية حسب تقييم الطبيب وبروتوكول الخدمة.",
      lead: "التدخل العلاجي قرار طبي، ويتم فقط بعد تقييم الحالة والتأكد من مناسبته.",
      points: ["اقرأ النبذة بهدوء قبل التوجه للخدمة.", "اسأل الفريق الطبي عن الخطوة المناسبة لحالتك.", "الخدمة تتم بعد تقييم الطبيب داخل العيادة."]
    }),
    "soft-laser": videoAdvice("كي النقط", "خدمة علاجية دقيقة حسب تقييم الطبيب.", "الإجراء البسيط يحتاج تشخيص مضبوط وتعليمات بعد الخدمة للحفاظ على النتيجة."),
    electrocautery: videoAdvice("حقن الكورتيزون", "خدمة علاجية لبعض الحالات الجلدية حسب تقييم الطبيب.", "الحقن ليس مناسبًا لكل الحالات، لذلك القرار يكون للطبيب بعد الكشف."),
    uvb: videoAdvice("الأشعة فوق البنفسجية", "جلسات لحالات جلدية مزمنة وفق بروتوكول طبي.", "الانتظام والمتابعة هما سر الاستفادة من الجلسات وتقليل الأعراض."),
    "derma-lab": videoAdvice("تحاليل المعمل", "تحاليل تساعد في دعم تشخيص الطبيب للحالات الجلدية.", "نتيجة التحليل تضيف وضوحًا للخطة العلاجية وتقلل التجربة العشوائية."),
    "derma-physical": videoAdvice("العلاج الطبيعي", "دعم للحالات التي تحتاج جلسات أو إرشادات حركة مرتبطة بالخدمة.", "العلاج الطبيعي جزء من التعافي، وليس خطوة منفصلة عن متابعة الطبيب.")
  },

newsItems: [
{
  title: "📢 آخر منشورات الإدارة",
  text: "متابعة مستمرة لتطوير الخدمات الصحية والتحول الرقمي لخدمة المواطنين بمنطقة الوايلي الطبية.",
  tag: "🆕 منشور جديد",
  href: latestPostUrl
},

{
  title: "🎉 تهنئة رسمية",
  text: "تتقدم منطقة الوايلي الطبية بخالص التهنئة للسيد الأستاذ الدكتور تامر مدكور رئيس قطاع الشئون الصحية بالقاهرة بمناسبة تحقيق المركز الأول في المستهدفات الصحية.",
  tag: "🏆 تهنئة",
  href: congratulationsUrl
},

{
  title: "⭐ إنجازات منطقة الوايلي",
  text: "👩‍⚕️ د. غادة الديب:\nهناك أشخاص يعملون في صمت ويبذلون جهداً كبيراً كل يوم دون انتظار كلمة شكر.\nواليوم توقفنا لنقول لهم: شكراً.",
  tag: "🌟 إنجاز",
  href: achievementsUrl
}
  ],
  galleryItems: [
    { title: "حكايات بدأت بنبضة", text: "ألبوم صور الفعاليات والتكريمات", image: "assets/images/album/photo-01.jpg", fallback: "assets/images/Album 01.jpg" },
    { title: "فريق الوايلي", text: "صور جماعية وذكريات العمل", image: "assets/images/album/photo-02.jpg", fallback: "assets/images/Album 02.jpg" },
    { title: "خدماتنا على الأرض", text: "لقطات من الحملات والخدمات", image: "assets/images/album/photo-03.jpg", fallback: "assets/images/Album 03.jpg" }
  ]
};

function officialService(data) {
  return { kind: "official", pdf: "#", ...data };
}

function adviceService(data) {
  return { kind: "advice", videoUrl: "", ...data };
}

function videoAdvice(title, description, lead) {
  return adviceService({
    title,
    description,
    lead,
    points: ["اقرأ النبذة بهدوء قبل التوجه للخدمة.", "اسأل الفريق الطبي عن الخطوة المناسبة لحالتك.", "الفيديو التعريفي سيتم ربطه من يوتيوب عند اعتماد الرابط."],
    videoUrl: "vnd.youtube://"
  });
}

const officeGrid = document.querySelector("#officeGrid");
const careGrid = document.querySelector("#careGrid");
const newsGrid = document.querySelector("#newsGrid");
const galleryGrid = document.querySelector("#galleryGrid");
const workspace = document.querySelector("#workspace");
const workspaceContent = document.querySelector("#workspaceContent");
const locationToast = document.querySelector("#locationToast");
const albumModal = document.querySelector("#albumModal");
const albumImage = document.querySelector("#albumImage");
const assistantFloat = document.querySelector("#assistantFloat");
const assistantModal = document.querySelector("#assistantModal");
const assistantHint = document.querySelector("#assistantHint");
const assistantOpen = document.querySelector("#assistantOpen");
const assistantSection = document.querySelector("#assistant");
const audioFiles = {
  birth: "01 تسجيل الميلاد.mp3",
  "vaccination-table": "02 التطعيمات.mp3",
  "vaccination-care": "02 التطعيمات.mp3",
  death: "03 تسجيل الوفاه.mp3",
  "family-planning": "04 تنمية الاسرة.mp3"
};
let locationTimer;
let toastTimer;
let assistantHintTimer;
let assistantHintCycle;
let activeUnitId = "";
let activePhoto = 0;
let albumScale = 1;
let albumOffsetX = 0;
let albumOffsetY = 0;
let albumDragStart = null;
let albumLastTap = 0;
let albumPinchStart = null;
const albumPointers = new Map();
let workspaceHistoryOpen = false;
let albumHistoryOpen = false;

if ("scrollRestoration" in history) history.scrollRestoration = "manual";
window.scrollTo(0, 0);
window.addEventListener("pageshow", () => window.scrollTo(0, 0));
window.addEventListener("beforeunload", () => window.scrollTo(0, 0));

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  window.setTimeout(() => {
    document.querySelector("#splash").classList.add("hide");
  }, 3000);
  startAssistantHintLoop();
});

document.querySelector("#themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

document.querySelectorAll("[data-close-workspace]").forEach((item) => {
  item.addEventListener("click", closeWorkspace);
});

document.querySelectorAll("[data-close-album]").forEach((item) => {
  item.addEventListener("click", closeAlbum);
});

document.querySelector("#openAlbum").addEventListener("click", () => openAlbum(0));
document.querySelector("#nextPhoto").addEventListener("click", () => movePhoto(1));
document.querySelector("#prevPhoto").addEventListener("click", () => movePhoto(-1));
assistantOpen.addEventListener("click", openAssistant);
document.querySelectorAll("[data-close-assistant]").forEach((item) => {
  item.addEventListener("click", closeAssistant);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!workspace.hidden) closeWorkspace();
    if (!albumModal.hidden) closeAlbum();
    if (!assistantModal.hidden) closeAssistant();
  }
});

renderUnits();
renderNews();
renderGallery();
initScrollReveal();
initAlbumGestures();
initAssistantFloat();

window.addEventListener("popstate", () => {
  if (!albumModal.hidden) {
    closeAlbum({ skipHistory: true });
    return;
  }
  if (!workspace.hidden) {
    closeWorkspace({ skipHistory: true });
  }
});

function renderUnits() {
  officeGrid.innerHTML = platformData.units.filter((unit) => unit.type === "office" && !unit.hidden).map(unitCard).join("");
  careGrid.innerHTML = platformData.units.filter((unit) => unit.type === "care" && !unit.hidden).map(unitCard).join("");
  document.querySelectorAll("[data-unit]").forEach((card) => {
    card.addEventListener("click", () => openUnit(card.dataset.unit));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") openUnit(card.dataset.unit);
    });
  });
}

function unitCard(unit) {
  return `
    <article class="unit-card ${unit.type === "care" ? "care-card" : ""}" tabindex="0" role="button" data-unit="${unit.id}">
      <div class="unit-icon" aria-hidden="true">${unit.icon}</div>
      <div>
        <h3>${unit.title}</h3>
        <p>${unit.subtitle}</p>
      </div>
      <div class="unit-meta">
        <span>${unit.services.length} خدمات</span>
        <span>${unit.type === "care" ? "خريطة خاصة" : "نطاق منزلي"}</span>
      </div>
    </article>
  `;
}

function renderNews() {
  const orderedNews = platformData.newsItems.map((item, index) => ({
    ...item,
    category: item.category || (index === 1 ? "congratulations" : index === 2 ? "achievement" : "news")
  })).sort((a, b) => newsOrder(a.category) - newsOrder(b.category));
  newsGrid.innerHTML = orderedNews.map((item, index) => {
    const category = item.category;
    return `
    <a class="news-card news-${category}" data-news-category="${category}" style="--news-delay: ${index * 1.8}s" href="${item.href}" target="_blank" rel="noopener">
      <span class="news-icon" aria-hidden="true">${newsIcon(category)}</span>
      <p class="eyebrow">${item.tag}</p>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <span>فتح الصفحة</span>
      ${category === "congratulations" ? `<i class="celebration celebration-one" aria-hidden="true"></i><i class="celebration celebration-two" aria-hidden="true"></i>` : ""}
      ${category === "achievement" ? `<i class="achievement-glow" aria-hidden="true"></i>` : ""}
    </a>
  `;
  }).join("");
  initCongratulations();
}

function newsOrder(category) {
  return { congratulations: 0, achievement: 1, news: 2, announcement: 2 }[category] ?? 3;
}

function newsIcon(category) {
  return {
    announcement: "!",
    achievement: "★",
    congratulations: "♡",
    campaign: "●",
    warning: "!",
    news: "i"
  }[category] || "i";
}

function renderGallery() {
  galleryGrid.innerHTML = platformData.galleryItems.map((item, index) => `
    <button class="gallery-card" type="button" data-photo="${index}">
      <img src="${item.image}" alt="" onerror="this.onerror=null;this.src='${item.fallback || item.image}'">
      <span>
        <strong>${item.title}</strong>
        <small>${item.text}</small>
      </span>
    </button>
  `).join("");
  document.querySelectorAll("[data-photo]").forEach((button) => {
    button.addEventListener("click", () => openAlbum(Number(button.dataset.photo)));
  });
}

function openUnit(unitId) {
  const unit = platformData.units.find((item) => item.id === unitId);
  if (!unit) return;
  activeUnitId = unitId;
  const services = unit.services.map((serviceId) => ({ id: serviceId, service: platformData.services[serviceId] })).filter((item) => item.service);
  workspaceContent.innerHTML = `
    <div class="workspace-hero ${unit.type === "care" ? "care-hero" : ""}">
      <div>
        <p class="eyebrow">داخل المنصة</p>
        <h2 id="workspaceTitle">${unit.title}</h2>
        <p>${unit.subtitle}</p>
      </div>
      <button class="location-button" type="button" data-location="${unit.id}">
        <span aria-hidden="true">📍</span>
        ${unit.locationTitle}
      </button>
    </div>
    <div class="services-list">
      ${services.map(({ id, service }) => serviceCard(id, service, unit.type)).join("")}
    </div>
  `;
  openWorkspace();
  resetWorkspaceScroll();
  workspaceContent.querySelector("[data-location]").addEventListener("click", showLocationToast);
  workspaceContent.querySelectorAll("[data-service]").forEach((button) => {
    button.addEventListener("click", () => openService(button.dataset.service));
  });
  clearTimeout(locationTimer);
}

function serviceCard(id, service, unitType) {
  const symbol = service.kind === "hospitals" ? "⌂" : service.kind === "prices" ? "ج" : service.kind === "advice" ? "♡" : "＋";
  return `
    <button class="service-card ${unitType === "care" ? "service-soft" : ""}" type="button" data-service="${id}">
      <span class="service-icon" aria-hidden="true">${symbol}</span>
      <span>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </span>
    </button>
  `;
}

function openService(serviceId) {
  const service = platformData.services[serviceId];
  if (!service) return;
  if (service.kind === "hospitals") return openHospitals();
  if (service.kind === "prices") return openPrices(service, serviceId);
  if (service.kind === "advice") return openAdvice(service, serviceId);
  return openOfficial(service, serviceId);
}

function openOfficial(service, serviceId) {
  workspaceContent.innerHTML = `
    <article class="service-sheet">
      <div class="sheet-header">
        <p class="eyebrow">صفحة خدمة رسمية</p>
        <h2 id="workspaceTitle">${service.title}</h2>
        <p>${service.description}</p>
      </div>
      <div class="info-grid">
        ${infoBlock("الأوراق المطلوبة", service.requirements, "ul")}
        ${infoBlock("خطوات التنفيذ", service.steps, "ol")}
        ${infoBlock("ملاحظات مهمة", service.notes, "ul")}
      </div>
      <div class="quick-card duration-card">
        <p class="eyebrow">مدة الإجراء</p>
        <h3>${service.duration}</h3>
      </div>
      ${serviceActions(service, serviceId)}
    </article>
  `;
  bindBackButton();
  resetWorkspaceScroll();
}

function voiceTools(serviceId) {
  const fileName = audioFiles[serviceId] || `${serviceId}.mp3`;
  const audioSrc = audioFiles[serviceId] ? `assets/audio/${audioFiles[serviceId]}` : "";
  return `
      <button class="voice-action listen-action" type="button" data-listen-service data-audio-src="${audioSrc}" data-audio-name="${fileName}" aria-label="استمع للخدمة">
        <span class="listen-symbol" aria-hidden="true">🔊</span>
        <span class="replay-chip" aria-hidden="true">↺</span>
      </button>
      <button class="voice-action copy-action" type="button" data-copy-service aria-label="نسخ التفاصيل">
        <span class="copy-symbol" aria-hidden="true">⧉</span>
      </button>
  `;
}

function openAdvice(service, serviceId) {
  workspaceContent.innerHTML = `
    <article class="service-sheet advice-sheet">
      <div class="sheet-header">
        <p class="eyebrow">معلومة صحية مبسطة</p>
        <h2 id="workspaceTitle">${service.title}</h2>
        <p>${service.description}</p>
      </div>
      <section class="advice-lead">
        <h3>${service.lead}</h3>
        <ul>${service.points.map((point) => `<li>${point}</li>`).join("")}</ul>
        ${service.caution ? `<p class="caution">${service.caution}</p>` : ""}
      </section>
      ${service.directUrl ? `
      <section class="video-card direct-card">
        <a href="${service.directUrl}" target="_blank" rel="noopener">
          <span class="youtube-mark map-mark">⌖</span>
          <strong>${service.directLabel || "فتح الرابط الرسمي"}</strong>
          <small>رابط مباشر للمبادرة الرسمية</small>
        </a>
      </section>` : ""}
      ${service.videoUrl ? `
      <section class="video-card">
        <a href="${service.videoUrl}">
          <span class="youtube-mark">▶</span>
          <strong>فيديو تعريفي</strong>
          <small>يفتح من تطبيق YouTube عند إضافة الرابط الرسمي</small>
        </a>
      </section>` : ""}
      ${serviceActions(service, serviceId)}
    </article>
  `;
  bindBackButton();
  resetWorkspaceScroll();
}

function openHospitals() {
  const unit = platformData.units.find((item) => item.id === activeUnitId);
  const hospitals = hospitalsByOffice[activeUnitId] || [];
  workspaceContent.innerHTML = `
    <article class="service-sheet">
      <div class="sheet-header">
        <p class="eyebrow">دليل المستشفيات</p>
        <h2 id="workspaceTitle">المستشفيات التابعة لمكتب ${unit.title}</h2>
        <p>الأسماء والعناوين مرتبة للرجوع السريع عند الحاجة.</p>
      </div>
      <div class="hospital-list">
        ${hospitals.map(([name, address]) => `
          <section class="hospital-card">
            <span aria-hidden="true">⌂</span>
            <div>
              <h3>${name}</h3>
              <p>${address}</p>
            </div>
          </section>
        `).join("")}
      </div>
      <div class="sheet-actions">
        <button class="ghost-button back-action" type="button" data-back aria-label="رجوع لخدمات الجهة">
          <span aria-hidden="true">↩</span>
        </button>
      </div>
    </article>
  `;
  bindBackButton();
  resetWorkspaceScroll();
}

function openPrices(service, serviceId) {
  workspaceContent.innerHTML = `
    <article class="service-sheet">
      <div class="sheet-header">
        <p class="eyebrow">مركز التحصين</p>
        <h2 id="workspaceTitle">${service.title}</h2>
        <p>${service.description}</p>
      </div>
      <div class="price-list">
        ${service.prices.map(([name, target, price]) => `
          <section class="price-row">
            <strong>${name}</strong>
            <span>${target}</span>
            <b>${price}</b>
          </section>
        `).join("")}
      </div>
      <div class="advice-lead"><h3>${service.note}</h3></div>
      ${serviceActions(service, serviceId)}
    </article>
  `;
  bindBackButton();
  resetWorkspaceScroll();
}

function infoBlock(title, items, listType) {
  const tag = listType === "ol" ? "ol" : "ul";
  return `
    <section class="info-block">
      <h3>${title}</h3>
      <${tag}>${items.map((item) => `<li>${item}</li>`).join("")}</${tag}>
    </section>
  `;
}

function serviceActions(service, serviceId = "") {
  return `
    <div class="sheet-actions ${serviceId ? "voice-tools" : ""}">
      ${serviceId ? voiceTools(serviceId) : ""}
      <a class="primary-button" aria-label="عرض ملف PDF" href="${service.pdf || "#"}" ${!service.pdf || service.pdf === "#" ? "aria-disabled='true'" : "target='_blank' rel='noopener'"}>
        <span aria-hidden="true">PDF</span>
      </a>
      <button class="ghost-button back-action" type="button" data-back aria-label="رجوع لخدمات الجهة">
        <span aria-hidden="true">↩</span>
      </button>
      ${serviceId ? `<p class="voice-status" aria-live="polite"></p>` : ""}
    </div>
  `;
}

function bindBackButton() {
  workspaceContent.querySelector("[data-back]").addEventListener("click", () => openUnit(activeUnitId));
  bindVoiceTools();
}

function bindVoiceTools() {
  const listenButton = workspaceContent.querySelector("[data-listen-service]");
  const copyButton = workspaceContent.querySelector("[data-copy-service]");
  const status = workspaceContent.querySelector(".voice-status");
  if (!listenButton || !copyButton || !status) return;
  let audioPlayer;
  const listenSymbol = listenButton.querySelector(".listen-symbol");
  const readableText = () => workspaceContent.querySelector(".service-sheet").innerText
    .replace(/استمع للخدمة|إعادة|نسخ التفاصيل|فتح الملف الرسمي PDF|رجوع لخدمات الجهة/g, "")
    .trim();
  const resetListenState = () => {
    listenButton.classList.remove("is-speaking");
    if (listenSymbol) listenSymbol.textContent = "🔊";
  };
  const ensureAudio = (button = listenButton) => {
    const audioSrc = button.dataset.audioSrc;
    const audioName = button.dataset.audioName;
    if (!audioSrc) {
      status.textContent = `الخدمة جاهزة للصوت. أضف الملف باسم: ${audioName}`;
      return null;
    }
    if (!audioPlayer) {
      audioPlayer = new Audio(encodeURI(audioSrc));
      audioPlayer.addEventListener("ended", () => {
        resetListenState();
        status.textContent = "انتهى التشغيل.";
      });
      audioPlayer.addEventListener("error", () => {
        resetListenState();
        status.textContent = `لم يتم العثور على ملف الصوت. اسم الملف المطلوب: ${audioName}`;
      });
    }
    return audioPlayer;
  };
  listenButton.addEventListener("click", (event) => {
    const player = ensureAudio();
    if (!player) return;
    if (event.target.closest(".replay-chip")) {
      player.pause();
      player.currentTime = 0;
      listenButton.classList.add("is-speaking");
      if (listenSymbol) listenSymbol.textContent = "■";
      status.textContent = "إعادة تشغيل الخدمة من البداية...";
      player.play().catch(() => {
        resetListenState();
        status.textContent = "تعذر تشغيل الصوت على هذا المتصفح.";
      });
      return;
    }
    if (!player.paused) {
      player.pause();
      resetListenState();
      status.textContent = "تم إيقاف الصوت مؤقتًا. اضغط مرة أخرى للاستكمال.";
      return;
    }
    listenButton.classList.add("is-speaking");
    if (listenSymbol) listenSymbol.textContent = "■";
    status.textContent = player.currentTime > 0 ? "جارٍ استكمال الصوت..." : "جارٍ تشغيل الخدمة صوتيًا...";
    player.play().catch(() => {
      resetListenState();
      status.textContent = "تعذر تشغيل الصوت على هذا المتصفح.";
    });
  });
  copyButton.addEventListener("click", async () => {
    try {
      await copyText(readableText());
      copyButton.classList.add("is-copied");
      const copySymbol = copyButton.querySelector(".copy-symbol");
      if (copySymbol) copySymbol.textContent = "✓";
      status.textContent = "تم نسخ تفاصيل الخدمة.";
      showCopyToast("تم النسخ");
      window.setTimeout(() => {
        copyButton.classList.remove("is-copied");
        if (copySymbol) copySymbol.textContent = "⧉";
      }, 1800);
    } catch {
      status.textContent = "تعذر النسخ على هذا المتصفح.";
    }
  });
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall through to the older browser copy path.
    }
  }
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
}

function openWorkspace() {
  workspace.hidden = false;
  document.body.classList.add("modal-open");
  resetWorkspaceScroll();
  workspace.classList.remove("workspace-enter");
  void workspace.offsetWidth;
  workspace.classList.add("workspace-enter");
  if (!workspaceHistoryOpen) {
    history.pushState({ workspace: true }, "", "#workspace");
    workspaceHistoryOpen = true;
  }
}

function resetWorkspaceScroll() {
  const panel = workspace.querySelector(".workspace-panel");
  workspaceContent.scrollTop = 0;
  if (panel) panel.scrollTop = 0;
  requestAnimationFrame(() => {
    workspaceContent.scrollTop = 0;
    if (panel) panel.scrollTop = 0;
  });
}

function closeWorkspace(options = {}) {
  workspace.hidden = true;
  updateBodyLock();
  clearTimeout(locationTimer);
  workspaceHistoryOpen = false;
  if (!options.skipHistory && location.hash === "#workspace") {
    history.back();
  }
}

function updateBodyLock() {
  const locked = !workspace.hidden || !albumModal.hidden || !assistantModal.hidden;
  document.body.classList.toggle("modal-open", locked);
}

function showLocationToast() {
  locationToast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    locationToast.hidden = true;
  }, 4200);
}

function showCopyToast(message) {
  const toast = document.createElement("div");
  toast.className = "copy-toast";
  toast.textContent = message;
  document.body.append(toast);
  window.setTimeout(() => toast.classList.add("show"), 10);
  window.setTimeout(() => toast.remove(), 2200);
}

function openAlbum(index) {
  activePhoto = index;
  resetAlbumZoom();
  updateAlbumImage();
  albumModal.hidden = false;
  assistantFloat.classList.add("is-hidden-for-album");
  document.body.classList.add("modal-open");
  if (!albumHistoryOpen) {
    history.pushState({ album: true }, "", "#album");
    albumHistoryOpen = true;
  }
}

function closeAlbum(options = {}) {
  albumModal.hidden = true;
  assistantFloat.classList.remove("is-hidden-for-album");
  updateBodyLock();
  albumHistoryOpen = false;
  resetAlbumZoom();
  if (!options.skipHistory && location.hash === "#album") {
    history.back();
  }
}

function movePhoto(direction) {
  activePhoto = (activePhoto + direction + platformData.galleryItems.length) % platformData.galleryItems.length;
  resetAlbumZoom();
  updateAlbumImage();
}

function updateAlbumImage() {
  const item = platformData.galleryItems[activePhoto];
  const previousItem = platformData.galleryItems[(activePhoto - 1 + platformData.galleryItems.length) % platformData.galleryItems.length];
  const nextItem = platformData.galleryItems[(activePhoto + 1) % platformData.galleryItems.length];
  albumImage.onerror = () => {
    albumImage.onerror = null;
    albumImage.src = item.fallback || item.image;
  };
  albumImage.src = item.image;
  albumImage.alt = item.title;
  albumImage.dataset.prev = previousItem.fallback || previousItem.image;
  albumImage.dataset.next = nextItem.fallback || nextItem.image;
  albumImage.parentElement?.style.setProperty("--album-next", `url("${nextItem.fallback || nextItem.image}")`);
  albumImage.classList.remove("is-changing");
  void albumImage.offsetWidth;
  albumImage.classList.add("is-changing");
  applyAlbumTransform();
}

function resetAlbumZoom() {
  albumScale = 1;
  albumOffsetX = 0;
  albumOffsetY = 0;
  albumDragStart = null;
  albumPinchStart = null;
  albumPointers.clear();
  applyAlbumTransform();
}

function applyAlbumTransform() {
  if (albumScale <= 1) {
    albumOffsetX = 0;
    albumOffsetY = 0;
  } else {
    const maxOffset = 420 * albumScale;
    albumOffsetX = Math.max(-maxOffset, Math.min(maxOffset, albumOffsetX));
    albumOffsetY = Math.max(-maxOffset, Math.min(maxOffset, albumOffsetY));
  }
  albumImage.style.transform = `translate(${albumOffsetX}px, ${albumOffsetY}px) scale(${albumScale})`;
  albumImage.classList.toggle("is-zoomed", albumScale > 1);
}

function setAlbumScale(nextScale, origin) {
  const oldScale = albumScale;
  albumScale = Math.min(4, Math.max(1, nextScale));
  if (origin && oldScale !== albumScale && albumScale > 1) {
    albumOffsetX += (origin.x - window.innerWidth / 2) * (albumScale - oldScale) * 0.08;
    albumOffsetY += (origin.y - window.innerHeight / 2) * (albumScale - oldScale) * 0.08;
  }
  applyAlbumTransform();
}

function pointerDistance(points) {
  const [a, b] = points;
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function pointerCenter(points) {
  const [a, b] = points;
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
}

function initAlbumGestures() {
  const albumStage = document.querySelector("#albumStage");
  if (!albumStage) return;

  albumStage.addEventListener("dblclick", (event) => {
    setAlbumScale(albumScale > 1 ? 1 : 2.35, { x: event.clientX, y: event.clientY });
  });

  albumStage.addEventListener("pointerdown", (event) => {
    albumPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    albumStage.setPointerCapture(event.pointerId);
    if (albumPointers.size === 2) {
      const points = [...albumPointers.values()];
      albumPinchStart = { distance: pointerDistance(points), scale: albumScale, center: pointerCenter(points) };
      albumDragStart = null;
      return;
    }
    albumDragStart = { x: event.clientX - albumOffsetX, y: event.clientY - albumOffsetY };
  });

  albumStage.addEventListener("pointermove", (event) => {
    if (albumPointers.has(event.pointerId)) {
      albumPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    }
    if (albumPointers.size === 2 && albumPinchStart) {
      event.preventDefault();
      const points = [...albumPointers.values()];
      const nextDistance = pointerDistance(points);
      const center = pointerCenter(points);
      setAlbumScale(albumPinchStart.scale * (nextDistance / albumPinchStart.distance), center);
      albumOffsetX += (center.x - albumPinchStart.center.x) * 0.12;
      albumOffsetY += (center.y - albumPinchStart.center.y) * 0.12;
      applyAlbumTransform();
      return;
    }
    if (!albumDragStart || albumScale <= 1) return;
    albumOffsetX = event.clientX - albumDragStart.x;
    albumOffsetY = event.clientY - albumDragStart.y;
    applyAlbumTransform();
  });

  ["pointerup", "pointercancel", "pointerleave"].forEach((eventName) => {
    albumStage.addEventListener(eventName, (event) => {
      albumPointers.delete(event.pointerId);
      if (albumPointers.size < 2) albumPinchStart = null;
      albumDragStart = null;
    });
  });

  albumStage.addEventListener("touchend", (event) => {
    const now = Date.now();
    if (now - albumLastTap < 280) {
      event.preventDefault();
      const touch = event.changedTouches[0];
      setAlbumScale(albumScale > 1 ? 1 : 2.35, touch ? { x: touch.clientX, y: touch.clientY } : undefined);
    }
    albumLastTap = now;
  }, { passive: false });

  albumStage.addEventListener("wheel", (event) => {
    event.preventDefault();
    setAlbumScale(albumScale + (event.deltaY < 0 ? 0.24 : -0.24), { x: event.clientX, y: event.clientY });
  }, { passive: false });
}

function initCongratulations() {
  const card = document.querySelector('[data-news-category="congratulations"]');
  if (!card) return;
  let celebrationTimer;
  const celebrate = () => {
    card.classList.remove("celebrate-now");
    void card.offsetWidth;
    card.classList.add("celebrate-now");
    clearTimeout(celebrationTimer);
    celebrationTimer = window.setTimeout(celebrate, 5000);
  };
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.some((entry) => entry.isIntersecting);
    clearTimeout(celebrationTimer);
    if (visible) celebrate();
    else card.classList.remove("celebrate-now");
  }, { threshold: 0.55 });
  observer.observe(card);
}

function initScrollReveal() {
  const items = document.querySelectorAll(".section, .unit-card, .news-card, .gallery-card, .footer-signature");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => {
    item.classList.add("reveal-item");
    observer.observe(item);
  });
}

function initAssistantFloat() {
  if (!assistantSection || !("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.some((entry) => entry.isIntersecting);
    assistantFloat.classList.toggle("is-docked-to-page", visible);
    if (visible) hideAssistantHint();
  }, { threshold: 0.18, rootMargin: "-8% 0px -8% 0px" });
  observer.observe(assistantSection);
}

function startAssistantHintLoop() {
  const show = () => {
    if (assistantModal.hidden && albumModal.hidden && !assistantFloat.classList.contains("is-docked-to-page")) {
      assistantHint.hidden = false;
      assistantHint.classList.remove("show");
      void assistantHint.offsetWidth;
      assistantHint.classList.add("show");
      assistantHintTimer = window.setTimeout(hideAssistantHint, 3600);
    }
  };
  assistantHintCycle = window.setInterval(show, 9000);
  window.setTimeout(show, 5200);
}

function hideAssistantHint() {
  clearTimeout(assistantHintTimer);
  assistantHint.classList.remove("show");
  window.setTimeout(() => {
    if (!assistantHint.classList.contains("show")) assistantHint.hidden = true;
  }, 360);
}

function openAssistant() {
  hideAssistantHint();
  assistantModal.hidden = false;
  assistantOpen.setAttribute("aria-expanded", "true");
  document.body.classList.add("modal-open");
  const frame = assistantModal.querySelector(".assistant-frame");
  if (!frame.getAttribute("src")) frame.setAttribute("src", frame.dataset.src);
}

function closeAssistant() {
  assistantModal.hidden = true;
  assistantOpen.setAttribute("aria-expanded", "false");
  updateBodyLock();
}
