const facebookPageUrl = "https://www.facebook.com/";

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
      points: ["استقبال الحالة.", "إجراء الفحوص المطلوبة.", "شرح النتيجة والتوجيه الصحي المناسب."]
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
    interventions: videoAdvice("خدمات التدخلات العلاجية", "تدخلات علاجية جلدية حسب تقييم الطبيب وبروتوكول الخدمة.", "التدخل العلاجي قرار طبي، ويتم فقط بعد تقييم الحالة والتأكد من مناسبته."),
    "soft-laser": videoAdvice("كي النقط", "خدمة علاجية دقيقة حسب تقييم الطبيب.", "الإجراء البسيط يحتاج تشخيص مضبوط وتعليمات بعد الخدمة للحفاظ على النتيجة."),
    electrocautery: videoAdvice("حقن الكورتيزون", "خدمة علاجية لبعض الحالات الجلدية حسب تقييم الطبيب.", "الحقن ليس مناسبًا لكل الحالات، لذلك القرار يكون للطبيب بعد الكشف."),
    uvb: videoAdvice("الأشعة فوق البنفسجية", "جلسات لحالات جلدية مزمنة وفق بروتوكول طبي.", "الانتظام والمتابعة هما سر الاستفادة من الجلسات وتقليل الأعراض."),
    "derma-lab": videoAdvice("تحاليل المعمل", "تحاليل تساعد في دعم تشخيص الطبيب للحالات الجلدية.", "نتيجة التحليل تضيف وضوحًا للخطة العلاجية وتقلل التجربة العشوائية."),
    "derma-physical": videoAdvice("العلاج الطبيعي", "دعم للحالات التي تحتاج جلسات أو إرشادات حركة مرتبطة بالخدمة.", "العلاج الطبيعي جزء من التعافي، وليس خطوة منفصلة عن متابعة الطبيب.")
  },
  newsItems: [
    { title: "منشورات صفحة الإدارة", text: "يمكن وضع رابط بوست فيسبوك هنا ليظهر كمعاينة أو يفتح المنشور مباشرة.", tag: "Facebook", href: facebookPageUrl },
    { title: "تنبيهات الخدمات الصحية", text: "مكان مخصص للتنبيهات السريعة: مواعيد تطعيمات، تعليمات موسمية، أو أخبار مكتب.", tag: "تنبيه", href: facebookPageUrl },
    { title: "إنجازات منطقة الوايلي", text: "مساحة لعرض الحملات، التكريمات، والقوافل الصحية فور نشرها على الصفحة الرسمية.", tag: "إنجاز", href: facebookPageUrl }
  ],
  galleryItems: [
    { title: "حكايات بدأت بنبضة", text: "ألبوم صور الفعاليات والتكريمات", image: "assets/images/platform-banner.png" },
    { title: "فريق الوايلي", text: "صور جماعية وذكريات العمل", image: "assets/images/waili-logo.png" },
    { title: "خدماتنا على الأرض", text: "لقطات من الحملات والخدمات", image: "assets/images/platform-banner.png" }
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
let locationTimer;
let toastTimer;
let activeUnitId = "";
let activePhoto = 0;

window.addEventListener("load", () => {
  window.setTimeout(() => {
    document.querySelector("#splash").classList.add("hide");
  }, 3000);
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

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!workspace.hidden) closeWorkspace();
    if (!albumModal.hidden) closeAlbum();
  }
});

renderUnits();
renderNews();
renderGallery();

function renderUnits() {
  officeGrid.innerHTML = platformData.units.filter((unit) => unit.type === "office").map(unitCard).join("");
  careGrid.innerHTML = platformData.units.filter((unit) => unit.type === "care").map(unitCard).join("");
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
  newsGrid.innerHTML = platformData.newsItems.map((item) => `
    <a class="news-card" href="${item.href}" target="_blank" rel="noopener">
      <p class="eyebrow">${item.tag}</p>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <span>فتح الصفحة</span>
    </a>
  `).join("");
}

function renderGallery() {
  galleryGrid.innerHTML = platformData.galleryItems.map((item, index) => `
    <button class="gallery-card" type="button" data-photo="${index}">
      <img src="${item.image}" alt="">
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
        <span aria-hidden="true">⌖</span>
        ${unit.locationTitle}
      </button>
    </div>
    <div class="services-list">
      ${services.map(({ id, service }) => serviceCard(id, service, unit.type)).join("")}
    </div>
  `;
  openWorkspace();
  workspaceContent.querySelector("[data-location]").addEventListener("click", showLocationToast);
  workspaceContent.querySelectorAll("[data-service]").forEach((button) => {
    button.addEventListener("click", () => openService(button.dataset.service));
  });
  clearTimeout(locationTimer);
  locationTimer = window.setTimeout(showLocationToast, 7000);
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
  if (service.kind === "prices") return openPrices(service);
  if (service.kind === "advice") return openAdvice(service);
  return openOfficial(service);
}

function openOfficial(service) {
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
      ${serviceActions(service)}
    </article>
  `;
  bindBackButton();
}

function openAdvice(service) {
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
      <section class="video-card">
        <a href="${service.videoUrl || "#"}" aria-disabled="${service.videoUrl ? "false" : "true"}">
          <span class="youtube-mark">▶</span>
          <strong>فيديو تعريفي</strong>
          <small>يفتح من تطبيق YouTube عند إضافة الرابط الرسمي</small>
        </a>
      </section>
      ${serviceActions(service)}
    </article>
  `;
  bindBackButton();
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
        <button class="ghost-button" type="button" data-back>رجوع لخدمات الجهة</button>
      </div>
    </article>
  `;
  bindBackButton();
}

function openPrices(service) {
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
      ${serviceActions(service)}
    </article>
  `;
  bindBackButton();
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

function serviceActions(service) {
  return `
    <div class="sheet-actions">
      <a class="primary-button" href="${service.pdf || "#"}" ${!service.pdf || service.pdf === "#" ? "aria-disabled='true'" : "download"}>
        تحميل الملف الرسمي PDF
      </a>
      <button class="ghost-button" type="button" data-back>رجوع لخدمات الجهة</button>
    </div>
  `;
}

function bindBackButton() {
  workspaceContent.querySelector("[data-back]").addEventListener("click", () => openUnit(activeUnitId));
}

function openWorkspace() {
  workspace.hidden = false;
  document.body.classList.add("modal-open");
}

function closeWorkspace() {
  workspace.hidden = true;
  document.body.classList.remove("modal-open");
  clearTimeout(locationTimer);
}

function showLocationToast() {
  locationToast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    locationToast.hidden = true;
  }, 4200);
}

function openAlbum(index) {
  activePhoto = index;
  updateAlbumImage();
  albumModal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeAlbum() {
  albumModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function movePhoto(direction) {
  activePhoto = (activePhoto + direction + platformData.galleryItems.length) % platformData.galleryItems.length;
  updateAlbumImage();
}

function updateAlbumImage() {
  albumImage.src = platformData.galleryItems[activePhoto].image;
  albumImage.alt = platformData.galleryItems[activePhoto].title;
}
