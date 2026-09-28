const latestPostUrl = "https://www.facebook.com/sehawaili";

const congratulationsUrl = "https://www.facebook.com/share/p/1Fk5bdv6X9/";

const achievementsUrl = "https://www.facebook.com/share/v/18FU3okutN/";

const officeBaseServices = ["birth", "death", "family-planning", "vaccination", "hospitals"];

const officeServiceDocuments = {
  demerdash: {
    birth: "assets/docs/الدمرداش/الدمرداش - تسجيل المواليد.pdf",
    death: "assets/docs/الدمرداش/الدمرداش - تسجيل الوفيات.pdf",
    "family-planning": "assets/docs/الدمرداش/الدمرداش - تنظيم الاسرة.pdf",
    vaccination: "assets/docs/الدمرداش/الدمرداش - جدول التطعيمات.pdf",
    hospitals: "assets/docs/الدمرداش/الدمرداش - المستشفيات التابعة.pdf"
  },
  zaher: {
    birth: "assets/docs/الظاهر/الظاهر - تسجيل المواليد.pdf",
    death: "assets/docs/الظاهر/الظاهر - تسجيل الوفيات.pdf",
    "family-planning": "assets/docs/الظاهر/الظاهر - تنظيم الأسرة.pdf",
    vaccination: "assets/docs/الظاهر/الظاهر - جدول التطعيمات.pdf",
    hospitals: "assets/docs/الظاهر/الظاهر - المستشفيات التابعة.pdf"
  },
  abbassia: {
    birth: "assets/docs/العباسيه/العباسية - تسجيل المواليد.pdf",
    death: "assets/docs/العباسيه/العباسية - تسجيل الوفيات.pdf",
    "family-planning": "assets/docs/العباسيه/العباسية - تنظيم الأسرة.pdf",
    vaccination: "assets/docs/العباسيه/العباسية - جدول التطعيمات.pdf",
    hospitals: "assets/docs/العباسيه/العباسية - المستشفيات التابعة.pdf",
    immunization: "assets/docs/العباسيه/العباسية - خدمات التحصييين.pdf",
    "vaccine-prices": "assets/docs/العباسيه/العباسية - قائمة مكاتب التطعيم الدولية والحجاج والمعتمرين بالمحافظات.pdf",
    "covid-recovery": "assets/docs/العباسيه/العباسية - رسالة إلى كل متعافٍ من فيروس سى.pdf",
    "hepatitis-b-mothers": "assets/docs/العباسيه/العباسية - مصل فيروس الالتهاب الكبدي بى لأمهات حاملة للفيروس.pdf"
  }
};

const unitMaps = {
  demerdash: {
    embedUrl: "https://www.google.com/maps/d/u/0/embed?mid=1i7VOFwUx3dgmkOQ8Qjlee9YT6VXV6bM&ehbc=2E312F",
    directionsUrl: "https://www.google.com/maps/d/u/0/viewer?mid=1i7VOFwUx3dgmkOQ8Qjlee9YT6VXV6bM",
    description: "خريطة نطاق مكتب صحة الدمرداش للحالات المنزلية."
  },
  "child-abbassia": createUnitMap("رعاية طفل العباسية", "١٠ شارع محمد رفعت، أمام قسم الوايلي، الوايلي، القاهرة"),
  dermatology: createUnitMap("عيادة الجلدية بالعباسية", "فخري عبد النور، العباسية القبلية، الوايلي، القاهرة")
};

function createUnitMap(name, address) {
  const query = `${name} ${address}`;
  return {
    embedUrl: `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`,
    directionsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`,
    description: address
  };
}

const vaccinationSchedule = [
  { age: "عند الولادة", label: "البداية الأولى", icon: "👶", accent: "birth", vaccines: [
    { name: "التهاب كبدي B", protects: "الالتهاب الكبدي الفيروسي B", dose: "٠٫٥ ملليلتر", method: "حقن عضلي في الجزء الخارجي الأمامي من الفخذ الأيمن" },
    { name: "سابين — جرعة صفرية", protects: "شلل الأطفال", dose: "نقطتان", method: "بالفم على اللسان" },
    { name: "بي سي جي (BCG)", protects: "الدرن", dose: "٠٫٠٥ ملليلتر", method: "حقن داخل الجلد بأعلى الذراع الأيسر" }
  ]},
  { age: "عند شهرين", label: "الجرعة الأولى", icon: "🌱", accent: "first", vaccines: [
    { name: "سابين — الجرعة الأولى", protects: "شلل الأطفال", dose: "نقطتان", method: "بالفم على اللسان" },
    { name: "الخماسي — الجرعة الأولى", protects: "الدفتيريا والسعال الديكي والتيتانوس والالتهاب الكبدي B والإنفلونزا البكتيرية", dose: "٠٫٥ ملليلتر", method: "حقن عضلي في الفخذ الأيمن" },
    { name: "سولك — الجرعة الأولى", protects: "شلل الأطفال (لقاح معطّل)", dose: "٠٫٥ ملليلتر", method: "حقن عضلي في الفخذ الأيسر" }
  ]},
  { age: "عند ٤ أشهر", label: "الجرعة الثانية", icon: "🌼", accent: "second", vaccines: [
    { name: "سابين — الجرعة الثانية", protects: "شلل الأطفال", dose: "نقطتان", method: "بالفم على اللسان" },
    { name: "الخماسي — الجرعة الثانية", protects: "الدفتيريا والسعال الديكي والتيتانوس والالتهاب الكبدي B والإنفلونزا البكتيرية", dose: "٠٫٥ ملليلتر", method: "حقن عضلي في الفخذ الأيمن" },
    { name: "سولك — الجرعة الثانية", protects: "شلل الأطفال (لقاح معطّل)", dose: "٠٫٥ ملليلتر", method: "حقن عضلي في الفخذ الأيسر" }
  ]},
  { age: "عند ٦ أشهر", label: "الجرعة الثالثة", icon: "✨", accent: "third", vaccines: [
    { name: "سابين — الجرعة الثالثة", protects: "شلل الأطفال", dose: "نقطتان", method: "بالفم على اللسان" },
    { name: "الخماسي — الجرعة الثالثة", protects: "الدفتيريا والسعال الديكي والتيتانوس والالتهاب الكبدي B والإنفلونزا البكتيرية", dose: "٠٫٥ ملليلتر", method: "حقن عضلي في الفخذ الأيمن" },
    { name: "سولك — الجرعة الثالثة", protects: "شلل الأطفال (لقاح معطّل)", dose: "٠٫٥ ملليلتر", method: "حقن عضلي في الفخذ الأيسر" }
  ]},
  { age: "عند ٩ أشهر", label: "الجرعة الرابعة", icon: "🧸", accent: "fourth", vaccines: [
    { name: "سابين — الجرعة الرابعة", protects: "شلل الأطفال", dose: "نقطتان", method: "بالفم على اللسان" },
    { name: "فيتامين أ", protects: "دعم صحة الطفل والوقاية من نقص فيتامين أ", dose: "١٠٠٬٠٠٠ وحدة دولية", method: "كبسولة بالفم" }
  ]},
  { age: "عند ١٢ شهر", label: "الجرعة الخامسة", icon: "🎈", accent: "fifth", vaccines: [
    { name: "سابين — الجرعة الخامسة", protects: "شلل الأطفال", dose: "نقطتان", method: "بالفم على اللسان" },
    { name: "أم أم آر (MMR) — الجرعة الأولى", protects: "الحصبة والنكاف والحصبة الألمانية", dose: "٠٫٥ ملليلتر", method: "حقن تحت الجلد بأعلى الذراع الأيسر" }
  ]},
  { age: "عند ١٨ شهر", label: "جرعات منشطة", icon: "🛡️", accent: "booster", vaccines: [
    { name: "سابين — جرعة منشطة", protects: "شلل الأطفال", dose: "نقطتان", method: "بالفم على اللسان" },
    { name: "الثلاثي — جرعة منشطة", protects: "الدفتيريا والسعال الديكي والتيتانوس", dose: "٠٫٥ ملليلتر", method: "حقن عضلي في الفخذ الأيمن" },
    { name: "أم أم آر (MMR) — جرعة منشطة", protects: "الحصبة والنكاف والحصبة الألمانية", dose: "٠٫٥ ملليلتر", method: "حقن تحت الجلد بأعلى الذراع الأيسر" },
    { name: "فيتامين أ", protects: "دعم صحة الطفل والوقاية من نقص فيتامين أ", dose: "٢٠٠٬٠٠٠ وحدة دولية", method: "كبسولة بالفم" }
  ]}
];

const dentalPriceGroups = [
  { title: "جراحة الفم والفكين", icon: "✚", items: [["إزالة اللحمية من على ضرس العقل بالليزر", "200"], ["خياطة جرح بالفم", "100"], ["فك غرز بالفم", "50"], ["تحرير لجام الشفة جراحيًا", "350"], ["تحرير لجام اللثة بالليزر", "400"], ["تنعيم وإعادة تشكيل عظم الفك الواحد", "300"], ["إعادة تشكيل دهليز الفم", "350"], ["أخذ رقعة جلد لإعادة تشكيل دهليز الفم", "500"], ["أخذ عينة (خزعة) من نسيج للفحص", "300"], ["تفريغ كيس تحت المخدر الموضعي", "850"], ["إزالة حصوة من القناة اللعابية", "400"], ["إزالة نتوءات عظمية جراحيًا", "350"], ["إزالة نتوءات عظمية بالليزر", "550"], ["غسيل مفصل تحت المخدر الموضعي", "2000"], ["حقن مفصل الفك تحت المخدر الموضعي", "1500"], ["تركيب اير بر علوي أو سفلي", "750"], ["فك اير بر علوي أو سفلي", "400"], ["تثبيت أسنان متحركة بسلك أو كمبوزيت", "300"]] },
  { title: "أمراض اللثة", icon: "⌁", items: [["تبييض الأسنان كيميائيًا أو بالليزر", "3000"], ["قص اللثة للتجميل بالليزر", "1000"], ["تنظيف جيوب لثة أو ضرس بالليزر", "700"], ["تنظيف الجيوب حتى نصف فك بالليزر", "1000"], ["إزالة تصبغات اللثة جراحيًا", "1200"], ["إزالة تصبغات اللثة بالليزر", "1800"], ["علاج انحسار اللثة للسن الواحد", "500"], ["علاج انحسار اللثة حتى نصف فك", "800"], ["ترقيع للثة بنسيج من المريض", "1000"]] },
  { title: "زراعة الأسنان", icon: "◈", items: [["غرس زرعة ألمانية / أمريكية بدون التركيبة", "8500"], ["غرس زرعة سويسرية بدون التركيبة", "7500"], ["غرس زرعة تركية بدون التركيبة", "6500"], ["إضافة حاجز غشائي لجزء واحد", "700"], ["تطعيم عظمي برقعة من المريض للسن الواحد", "1500"], ["تطعيم عظمي صناعي أو بدائل للسن الواحد", "2000"], ["تطعيم عظمي صناعي حتى مكان ٣ أسنان", "4000"], ["رفع الجيب الأنفي داخليًا للجانب الواحد", "1000"], ["رفع الجيب الأنفي المفتوح للجانب الواحد", "2000"], ["توسيع عظام الفك قبل الغرس", "1000"], ["إطالة اللثة قبل الغرس", "1000"], ["إضافة مستحضرات البلازما PRF / PRP", "300"]] },
  { title: "تقويم الأسنان", icon: "⌇", items: [["فك واحد معدن ثابت", "3750"], ["فكين معدن ثابت", "7500"], ["فك واحد متحرك", "3000"], ["فكين متحرك", "4500"], ["مثبت تقويم Retainer (للواحد)", "400"], ["جهاز تقويم خارجي", "3000"], ["Expansion screw", "900"], ["Mini screws", "1000"]] },
  { title: "علاج الجذور", icon: "◌", items: [["حشو جلاس أيونومر سائل / بودر", "350"], ["حشو جلاس أيونومر كبسولة", "300"], ["إضافة كبسولة جلاس أيونومر", "200"], ["بطانة حامية للعصب", "100"], ["حشو مؤقت", "100"], ["إضافة MTA", "150"], ["علاج جذور للسن الأمامي", "320"], ["علاج جذور للضاحك", "350"], ["علاج جذور للضرس", "370"]] },
  { title: "أسنان الأطفال", icon: "♧", items: [["حشو جلاس أيونومر سائل / بودر", "170"], ["حشو جلاس أيونومر كبسولة", "200"], ["تاج استانلس ستيل", "250"], ["حافظ مسافة", "100"], ["سد الشقوق والحفر", "750"], ["فلورايد للسن الواحد", "200"]] },
  { title: "تركيبات ثابتة", icon: "◇", items: [["طربوش زيركون", "500"], ["تركيبة بورسلين أو كوري", "150"], ["إزالة طربوش أو كوري", "100"], ["قشور الأسنان الأمامية (فينير) للوحدة", "600"]] }
];

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
    vaccination: adviceService({
      title: "التطعيمات",
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
      description: "وحدة صحية حكومية متخصصة في صحة الطفل من الولادة وحتى خمس سنوات، مع خدمات وقائية وعلاجية وتثقيفية للأسرة.",
      lead: "الرعاية ليست مكان تطعيمات فقط؛ بل متابعة للنمو والتغذية وصحة الطفل في أهم سنواته الأولى.",
      points: ["متابعة نمو الطفل واكتشاف سوء التغذية مبكرًا.", "تطعيمات وقائية وتقييم للحالة الغذائية.", "توعية الأم وإرشاد الأسرة للخدمة المناسبة.", "العنوان: ١٠ شارع محمد رفعت، أمام قسم الوايلي."],
      pdf: "assets/docs/رعايه طفل العباسيه/طفل العباسية- ماهى رعاية طفل العباسية.pdf"
    }),
    "child-zaher-about": adviceService({
      title: "ما هي رعاية طفل الظاهر؟",
      description: "خدمات رعاية طفل الظاهر مصممة لمساعدة الأسرة على فهم احتياج الطفل الصحي في الوقت المناسب.",
      lead: "الرعاية هنا تبدأ بالمعلومة. لما تفهم الميعاد والخدمة والخطوة الجاية، بتقدر تحمي طفلك من تأخير أو قلق غير ضروري.",
      points: ["تطعيمات ومتابعة.", "طب أسرة وطب أسنان.", "خدمات معملية.", "تنظيم أسرة وتوعية صحية."]
    }),
    formula: adviceService({
      title: "صرف الألبان الصناعية",
      description: "خدمة للأطفال المستحقين وفق ضوابط وزارة الصحة وتحت إشراف الفريق الطبي المختص.",
      lead: "الاستحقاق يبدأ بفحص الطفل من لجنة الألبان وتوثيق السبب الصحي؛ لأن المتابعة جزء أساسي من الخدمة.",
      points: ["حضور الطفل شخصيًا عند الصرف لقياس الوزن والطول ومتابعة النمو.", "يشمل الاستحقاق حالات مثل التوأم أو تعذر الرضاعة الطبيعية بعد التقييم الطبي.", "تُراجع الحالة دوريًا وفق تعليمات الوحدة."],
      pdf: "assets/docs/رعايه طفل العباسيه/طفل العباسية - صرف الالبان.pdf"
    }),
    "marriage-check": {
      kind: "marriage-paused",
      title: "فحص المقبلين على الزواج",
      description: "الخدمة متوقفة مؤقتًا برعاية طفل العباسية.",
      directUrl: "https://100millionseha.eg/marriage",
      pdf: "assets/docs/رعايه طفل العباسيه/طفل العباسية- فحص المقبلين على الزواج.pdf"
    },
    dentistry: {
      kind: "dentistry",
      title: "طب الأسنان",
      description: "الكشوفات والخدمات وأسعارها الرسمية داخل رعاية طفل العباسية.",
      lead: "اختار نوع الخدمة لتظهر التفاصيل والسعر قبل التوجه. القرار الوزاري معروض بوضوح للرجوع إليه.",
      decisionImage: "assets/docs/dental-ministerial-decision.png"
    },
    lab: {
      ...videoAdvice("المعمل", "تحاليل وفحوص بسيطة تدعم تشخيص الطبيب ومتابعة العلاج.", "نتيجة التحليل تساعد الطبيب في اتخاذ القرار، وتُجرى الفحوص بناءً على طلبه."),
      points: ["فحوص سكر الدم والهيموجلوبين والبول والبراز حسب طلب الطبيب.", "تحديد فصيلة الدم وعامل ريسس عند الحاجة.", "النتيجة تدعم التشخيص ولا تغني عن الكشف الطبي."],
      pdf: "assets/docs/رعايه طفل العباسيه/رعاية طفل العباسية -  خدمات المعمل.pdf"
    },
    "family-medicine": {
      ...videoAdvice("طب الأسرة", "كشف ومتابعة صحية شاملة لأفراد الأسرة والحالات البسيطة والمتوسطة.", "طب الأسرة هو البداية الصحيحة: تقييم للحالة، متابعة منتظمة، وتحويل للتخصص عند الحاجة."),
      points: ["كشف عام وقياس الضغط والوزن والطول وتقييم الحالة الصحية.", "متابعة السكر والضغط والحالات المزمنة الشائعة.", "توجيه للعيادة أو المستشفى المناسب وفق تقييم الطبيب."],
      pdf: "assets/docs/رعايه طفل العباسيه/طفل العباسية - طب الاسرة.pdf"
    },
    "family-planning-care": {
      ...videoAdvice("تنظيم الأسرة", "استشارات ووسائل آمنة لتنظيم الأسرة تحت إشراف طبي وتمريضي متخصص.", "اختيار الوسيلة المناسبة يبدأ بتقييم صحي وشرح واضح لكل سيدة أو زوجين.", "https://www.youtube.com/watch?v=BuviESIUckI"),
      points: ["استشارات طبية مجانية لاختيار الوسيلة الأنسب للحالة الصحية.", "صرف الحبوب والحقن واللولب والكبسولات حسب التقييم والتوافر.", "متابعة ما بعد الاستخدام والتعامل مع الأعراض الجانبية عند الحاجة."],
      pdf: "assets/docs/رعايه طفل العباسيه/طفل العباسية - تنظيم الاسرة.pdf"
    },
    "physical-therapy": {
      ...videoAdvice("العلاج الطبيعي", "خطة علاج غير جراحية لتخفيف الألم وتحسين الحركة تحت إشراف مختصين.", "العلاج الطبيعي برنامج متكامل يتحدد حسب الحالة، وليس جلسات موحدة للجميع.", "https://www.youtube.com/watch?v=xx7oDOK6wpw"),
      points: ["يناسب آلام المفاصل والعضلات والظهر والرقبة وبعض حالات ما بعد الكسور أو الجراحات.", "يشمل جلسات وأجهزة وتمارين علاجية يحددها المختص.", "عدد الجلسات ونوعها يحددان بعد فحص الحالة."],
      pdf: "assets/docs/رعايه طفل العباسيه/طفل العباسية  -  العلاج الطبيعى.pdf"
    },
    "vaccination-care": adviceService({
      title: "التطعيمات",
      description: "متابعة مواعيد التطعيمات وتنبيه ولي الأمر بالجرعات المهمة.",
      lead: "كل ميعاد تطعيم هو خطوة حماية لطفلك. لا تؤجل الجرعة إلا بتوجيه طبي.",
      points: ["اختار عمر الطفل لعرض الجرعات.", "احتفظ بكارت التطعيم للمتابعة.", "راجِع الفريق الطبي عند وجود أي استفسار."],
      interactiveGuide: "vaccines"
    }),
    "derma-about": adviceService({
      title: "ما هي عيادة الجلدية؟",
      description: "عيادة متخصصة لتشخيص وعلاج أمراض الجلد والشعر والأظافر تحت إشراف طبي.",
      lead: "التشخيص الصحيح هو بداية العلاج؛ لذلك تُحدد الخطة وفق الحالة قبل أي إجراء أو جلسة.",
      points: ["كشف مبكر وتقييم للحالات الجلدية والشعر والأظافر.", "علاج ومتابعة للحالات الشائعة والمزمنة حسب تقييم الطبيب.", "إجراءات وجلسات وفحوص مساندة عند الحاجة."],
      pdf: "assets/docs/عياده الجلديه/عيادة الجلدية - ماهى عيادة الجلدية بالعباسية.pdf"
    }),
    interventions: adviceService({
      title: "خدمات التدخلات العلاجية",
      description: "تدخلات علاجية جلدية حسب تقييم الطبيب وبروتوكول الخدمة.",
      lead: "التدخل العلاجي قرار طبي، ويتم فقط بعد تقييم الحالة والتأكد من مناسبته.",
      points: ["اقرأ النبذة بهدوء قبل التوجه للخدمة.", "اسأل الفريق الطبي عن الخطوة المناسبة لحالتك.", "الخدمة تتم بعد تقييم الطبيب داخل العيادة."]
    }),
    "soft-laser": {
      ...videoAdvice("علاج حالات السنط", "إجراء علاجي لحالات يحددها طبيب الجلدية باستخدام جهاز مخصص.", "يُجرى بدون تدخل جراحي وبألم محدود، بعد تقييم الطبيب لمدى مناسبة الإجراء."),
      points: ["يُستخدم جهاز علاجي مخصص يعمل بالبلازما الباردة.", "لا يتطلب تدخلًا جراحيًا.", "تحديد الإجراء يتم بعد الكشف الطبي."],
      pdf: "assets/docs/عياده الجلديه/عيادة الجلدية - علاج حالات السنط.pdf"
    },
    electrocautery: {
      ...videoAdvice("حقن الكورتيزون", "حقن موضعي لبعض الحالات الجلدية، ومنها بعض حالات الثعلبة، حسب تقييم الطبيب.", "الحقن ليس مناسبًا لكل الحالات؛ ويُحدد موضعه وعدد الجلسات وفق التشخيص."),
      points: ["يُحقن الدواء موضعيًا في أماكن الإصابة فقط.", "لا يحتاج إلى تدخل جراحي.", "عدد الجلسات يحدده طبيب الجلدية حسب الحالة."],
      pdf: "assets/docs/عياده الجلديه/عيادة الجلدية -  حقن الكورتيزون.pdf"
    },
    uvb: {
      ...videoAdvice("الأشعة فوق البنفسجية", "جلسات علاجية بإشراف طبي لبعض الأمراض الجلدية المزمنة.", "الالتزام بالخطة والمواعيد جزء من نجاح العلاج، ولا تُحدد الجلسات عشوائيًا."),
      points: ["قد تستخدم لحالات مثل الصدفية والبهاق والإكزيما المزمنة حسب تقييم الطبيب.", "يحدد الطبيب عدد الجلسات ومدتها وشدة الأشعة.", "اتبع تعليمات الحماية من الشمس وأبلغ الطبيب بأي آثار جانبية."],
      pdf: "assets/docs/عياده الجلديه/عيادة الجلدية -  جلسات الأشعة فوق البنفسجية.pdf"
    },
    "derma-lab": {
      ...videoAdvice("تحاليل المعمل", "فحوص معملية مساندة تساعد طبيب الجلدية على التشخيص والمتابعة.", "التحليل المناسب يوفر وضوحًا لخطة العلاج، لكنه لا يغني عن الكشف الطبي."),
      points: ["يشمل فحوصًا مثل الهيموجلوبين والسكر وبعض فحوص الفطريات والأظافر.", "تُجرى الفحوص بناءً على طلب الطبيب المعالج فقط.", "النتائج تدعم التشخيص ومتابعة الاستجابة للعلاج."],
      pdf: "assets/docs/عياده الجلديه/عيادة الجلدية -  خدمات المعمل.pdf"
    },
    "derma-physical": {
      ...videoAdvice("العلاج الطبيعي", "خطة علاج غير جراحية لتحسين الحركة وتقليل الألم حسب الحاجة الطبية.", "تُحدد الجلسات والتمارين والأجهزة بعد تقييم الحالة وتحت إشراف مختصين.", "https://www.youtube.com/watch?v=CszT7iw-qTo"),
      points: ["خدمات تساعد على تقليل الألم وتحسين القوة ومدى الحركة.", "قد تشمل جلسات وكمادات وأجهزة وتمارين علاجية.", "الانتظام في المتابعة يساعد على الوصول لأفضل نتيجة."],
      pdf: "assets/docs/عياده الجلديه/عيادة الجلدية -  العلاج الطبيعى.pdf"
    }
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

function videoAdvice(title, description, lead, videoUrl = "") {
  return adviceService({
    title,
    description,
    lead,
    points: ["اقرأ النبذة بهدوء قبل التوجه للخدمة.", "اسأل الفريق الطبي عن الخطوة المناسبة لحالتك.", videoUrl ? "شاهد الفيديو التعريفي للحصول على توجيه مبسط." : "الفيديو التعريفي يُضاف عند اعتماد الرابط."],
    videoUrl
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
const audioFloat = document.querySelector("#audioFloat");
const audioToggle = document.querySelector("#audioToggle");
const audioStop = document.querySelector("#audioStop");
const audioFiles = {
  birth: "01 تسجيل الميلاد.mp3",
  vaccination: "02 التطعيمات.mp3",
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
let activeAudio = null;

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
audioToggle.addEventListener("click", () => {
  if (!activeAudio) return;
  if (activeAudio.audio.paused) playActiveAudio();
  else pauseActiveAudio();
});
audioStop.addEventListener("click", stopActiveAudio);

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
initDynamicHeadings();

window.addEventListener("popstate", (event) => {
  if (!albumModal.hidden) {
    closeAlbum({ skipHistory: true });
    return;
  }
  const state = event.state;
  if (state?.workspace) {
    workspaceHistoryOpen = true;
    activeUnitId = state.unitId || activeUnitId;
    if (state.view === "service" && state.serviceId) {
      openService(state.serviceId, { skipHistory: true });
    } else if (state.view === "map" && activeUnitId) {
      const unit = platformData.units.find((item) => item.id === activeUnitId);
      if (unit) openUnitMap(unit, { skipHistory: true });
    } else if (activeUnitId) {
      openUnit(activeUnitId, { skipHistory: true });
    }
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

function openUnit(unitId, options = {}) {
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
  openWorkspace({ skipHistory: options.skipHistory });
  resetWorkspaceScroll();
  workspaceContent.querySelector("[data-location]").addEventListener("click", () => openUnitMap(unit));
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

function openService(serviceId, options = {}) {
  const service = platformData.services[serviceId];
  if (!service) return;
  if (!options.skipHistory) {
    history.pushState({ workspace: true, view: "service", unitId: activeUnitId, serviceId }, "", "#workspace");
    workspaceHistoryOpen = true;
  }
  if (serviceId === "vaccination" || service.interactiveGuide === "vaccines") return openVaccinationGuide();
  if (service.kind === "marriage-paused") return openMarriagePaused(service);
  if (service.kind === "dentistry") return openDentistry(service);
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

function openUnitMap(unit, options = {}) {
  const map = unitMaps[unit.id] || createUnitMap(unit.title, unit.locationTitle);
  if (!options.skipHistory) {
    history.pushState({ workspace: true, view: "map", unitId: unit.id }, "", "#workspace");
    workspaceHistoryOpen = true;
  }
  workspaceContent.innerHTML = `
    <article class="service-sheet map-sheet">
      <div class="sheet-header">
        <p class="eyebrow">خريطة واتجاهات</p>
        <h2 id="workspaceTitle">${unit.locationTitle}</h2>
        <p>${map.description}</p>
      </div>
      <div class="unit-map-wrap">
        <iframe class="unit-map-frame" title="${unit.locationTitle}" src="${map.embedUrl}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="sheet-actions map-actions">
        <a class="primary-button location-directions" href="${map.directionsUrl}" target="_blank" rel="noopener"><span aria-hidden="true">⌖</span> فتح الاتجاهات</a>
        <button class="ghost-button back-action" type="button" data-back aria-label="رجوع لخدمات الجهة"><span aria-hidden="true">↩</span> رجوع</button>
      </div>
    </article>
  `;
  openWorkspace({ skipHistory: options.skipHistory });
  bindBackButton();
  resetWorkspaceScroll();
}

function openMarriagePaused(service) {
  workspaceContent.innerHTML = `
    <article class="service-sheet marriage-paused-sheet">
      <div class="marriage-paused-glow" aria-hidden="true">⌁</div>
      <p class="eyebrow">فحص المقبلين على الزواج</p>
      <h2 id="workspaceTitle">الخدمة متوقفة مؤقتًا<br>برعاية طفل العباسية</h2>
      <p>لإتمام الفحص، يمكنك معرفة المكاتب الأخرى المتاحة من خلال الرابط الرسمي أدناه.</p>
      <a class="marriage-places-link" href="${service.directUrl}" target="_blank" rel="noopener">
        <span>↓</span>
        <strong>تعرّف على أماكن فحص المقبلين على الزواج</strong>
        <small>افتح الدليل الرسمي للمكاتب المتاحة</small>
      </a>
      <a class="marriage-pdf-link" href="${service.pdf}" target="_blank" rel="noopener">عرض متطلبات الفحص والدليل التفصيلي</a>
      <button class="ghost-button back-action marriage-back" type="button" data-back aria-label="رجوع لخدمات الجهة"><span aria-hidden="true">↩</span> رجوع لخدمات رعاية الطفل</button>
    </article>`;
  bindBackButton();
  resetWorkspaceScroll();
}

function initDynamicHeadings() {
  const heading = document.querySelector("[data-dynamic-heading]");
  const guidance = document.querySelector("[data-dynamic-guidance]");
  if (!heading || !guidance) return;
  const messages = [
    ["خدمتك أقرب مما تتخيل", "اختار الجهة، واقرأ الخطوات بهدوء قبل ما تتحرك."],
    ["المعلومة الصح بتوفر عليك المشوار", "تأكد من الأوراق والمواعيد قبل زيارة الوحدة الصحية."],
    ["صحتك وصحة أسرتك أولويتنا", "من الميلاد للتطعيم والعلاج: دليلك موجود هنا خطوة بخطوة."],
    ["كل خدمة واضحة… وكل خطوة محسوبة", "افتح الخدمة المناسبة وخد وقتك في معرفة التفاصيل."],
    ["لأسرة مطمئنة وخدمة أسهل", "احتفظ بالمستندات الأساسية واسأل الفريق الطبي عند الحاجة."],
    ["ابدأ من المعلومة الموثوقة", "الخدمة الصحيحة في المكان الصحيح بتوفر وقتك ومجهودك."],
    ["معاك في كل خطوة صحية", "التوجيه المبكر والكشف المنتظم يصنعان فرقًا كبيرًا."],
    ["منطقة الوايلي الطبية… أقرب إليك", "اختار ما تحتاجه اليوم، وخلي الوقاية عادة لكل الأسرة."],
    ["اهتم بصحتك قبل ما تقلق", "المتابعة في الوقت المناسب تحميك وتحمي من تحب."],
    ["رحلتك للخدمة تبدأ من هنا", "تصفح بهدوء، واختر الجهة الأنسب لحالتك."],
    ["خطوة صغيرة اليوم… اطمئنان أكبر بكرة", "التطعيم والكشف والمتابعة هدايا بسيطة لصحة العائلة."],
    ["خدمات رسمية بروح أقرب للناس", "نرتب لك المعلومة لتصل للخدمة وأنت مطمئن." ]
  ];
  const choice = messages[Math.floor(Math.random() * messages.length)];
  heading.textContent = choice[0];
  guidance.textContent = choice[1];
}

function openVaccinationGuide() {
  workspace.classList.add("workspace-fullscreen");
  workspaceContent.innerHTML = `
    <article class="service-sheet vaccine-guide">
      <div class="full-screen-topbar"><span>التطعيمات</span></div>
      <header class="vaccine-guide-hero">
        <p class="eyebrow">دليل الأسرة الصحي</p>
        <h2 id="workspaceTitle">تطعيمات طفلك خطوة بخطوة</h2>
        <p>اختار عمر طفلك، ثم افتح اسم التطعيم لمعرفة ما يحمي منه وطريقة إعطائه. راجِع مكتب الصحة للتأكيد عند التوجه للخدمة.</p>
      </header>
      <div class="vaccines-age-grid">
        ${vaccinationSchedule.map((group, index) => `
          <button class="vaccine-age-card vaccine-${group.accent}" type="button" data-vaccine-age="${index}">
            <span class="vaccine-age-icon" aria-hidden="true">${group.icon}</span>
            <span><small>${group.label}</small><strong>${group.age}</strong><em>${group.vaccines.length} تطعيمات</em></span>
            <b aria-hidden="true">‹</b>
          </button>
        `).join("")}
      </div>
      <section class="vaccine-details" id="vaccineDetails" aria-live="polite">
        <p>ابدأ باختيار عمر الطفل من الكروت بالأعلى.</p>
      </section>
      <div class="sheet-actions guide-actions">
        ${officeDocumentAction("vaccination")}
        <button class="ghost-button back-action" type="button" data-back aria-label="رجوع لخدمات الجهة"><span aria-hidden="true">↩</span> رجوع لخدمات الجهة</button>
      </div>
    </article>`;
  openWorkspace({ fullScreen: true });
  bindBackButton();
  workspaceContent.querySelectorAll("[data-vaccine-age]").forEach((button) => button.addEventListener("click", () => showVaccineDetails(Number(button.dataset.vaccineAge))));
  resetWorkspaceScroll();
}

function showVaccineDetails(index) {
  const group = vaccinationSchedule[index];
  const details = workspaceContent.querySelector("#vaccineDetails");
  workspaceContent.querySelectorAll("[data-vaccine-age]").forEach((card, cardIndex) => card.classList.toggle("is-selected", cardIndex === index));
  details.innerHTML = `
    <div class="vaccine-detail-heading"><span>${group.icon}</span><div><small>${group.label}</small><h3>${group.age}</h3></div></div>
    <div class="vaccine-detail-list">${group.vaccines.map((vaccine, itemIndex) => `
      <details class="vaccine-detail" ${itemIndex === 0 ? "open" : ""}>
        <summary><span>${itemIndex + 1}</span><strong>${vaccine.name}</strong><b>⌄</b></summary>
        <div><p><small>يحمي من</small>${vaccine.protects}</p><p><small>الكمية</small>${vaccine.dose}</p><p><small>طريقة الإعطاء</small>${vaccine.method}</p></div>
      </details>`).join("")}</div>`;
  details.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function openDentistry(service) {
  workspace.classList.add("workspace-fullscreen");
  workspaceContent.innerHTML = `
    <article class="service-sheet dentistry-sheet">
      <div class="full-screen-topbar"><span>طب الأسنان</span></div>
      <header class="dentistry-hero">
        <p class="eyebrow">رعاية طفل العباسية</p>
        <h2 id="workspaceTitle">طب الأسنان — الخدمات والأسعار</h2>
        <p>${service.lead}</p>
      </header>
      <section class="official-decision-card">
        <div class="official-seal" aria-hidden="true">⚖</div>
        <div><p class="eyebrow">وثيقة رسمية</p><h3>قرار وزير الصحة والسكان رقم ١٩٥ لسنة ٢٠٢٦</h3><p>يضيف خدمات طب الأسنان الواردة بالقائمة إلى أسعار الخدمات المقدمة بالمنشآت الصحية التابعة لوحدات الإدارة المحلية، ويُعمل به من تاريخ صدوره.</p></div>
        <a class="decision-view" href="${service.decisionImage}" target="_blank" rel="noopener">عرض القرار الرسمي <span>↗</span></a>
      </section>
      <p class="dental-note">الأسعار المعروضة بدون سعر العمل، طبقًا للصور المرفقة بالقائمة. اضغط على التخصص ثم الخدمة لعرض التفاصيل.</p>
      <div class="dental-group-grid">
        ${dentalPriceGroups.map((group, index) => `<button type="button" class="dental-group-card" data-dental-group="${index}"><span>${group.icon}</span><strong>${group.title}</strong><small>${group.items.length} خدمات وأسعار</small><b>‹</b></button>`).join("")}
      </div>
      <section id="dentalResults" class="dental-results" aria-live="polite"><p>اختر تخصصًا لعرض الكشوفات والخدمات المتاحة.</p></section>
      <section class="source-documents official-source-documents">
        <span class="source-documents-seal" aria-hidden="true">⚖</span>
        <div><p class="eyebrow">مرجع الأسعار الحكومي</p><strong>نسخ القائمة الرسمية المرفقة بالقرار الوزاري</strong><small>الأسعار المعتمدة ظاهرة في النسخ الأصلية التالية</small></div>
        <div class="source-document-links"><a href="assets/docs/dental-prices-page-1.png" target="_blank" rel="noopener">الصفحة الأولى ↗</a><a href="assets/docs/dental-prices-page-2.png" target="_blank" rel="noopener">الصفحة الثانية ↗</a></div>
      </section>
      <div class="sheet-actions guide-actions"><button class="ghost-button back-action" type="button" data-back aria-label="رجوع لخدمات الجهة"><span aria-hidden="true">↩</span> رجوع لخدمات الجهة</button></div>
    </article>`;
  openWorkspace({ fullScreen: true });
  bindBackButton();
  workspaceContent.querySelectorAll("[data-dental-group]").forEach((button) => button.addEventListener("click", () => showDentalGroup(Number(button.dataset.dentalGroup))));
  resetWorkspaceScroll();
}

function showDentalGroup(index) {
  const group = dentalPriceGroups[index];
  const target = workspaceContent.querySelector("#dentalResults");
  workspaceContent.querySelectorAll("[data-dental-group]").forEach((card, cardIndex) => card.classList.toggle("is-selected", cardIndex === index));
  target.innerHTML = `<div class="dental-results-head"><span>${group.icon}</span><div><small>قائمة الأسعار</small><h3>${group.title}</h3></div></div><div class="dental-price-grid">${group.items.map(([name, price], itemIndex) => `<button class="dental-price-card" type="button" data-dental-price="${itemIndex}"><span>${name}</span><b>${price} <small>جنيه</small></b></button>`).join("")}</div><p class="dental-selection-note" id="dentalSelectionNote">اختر خدمة لعرض ملخص السعر.</p>`;
  target.querySelectorAll("[data-dental-price]").forEach((button) => button.addEventListener("click", () => {
    const [name, price] = group.items[Number(button.dataset.dentalPrice)];
    target.querySelectorAll("[data-dental-price]").forEach((card) => card.classList.remove("is-selected"));
    button.classList.add("is-selected");
    target.querySelector("#dentalSelectionNote").textContent = `الخدمة المختارة: ${name} — السعر الرسمي الظاهر بالقائمة ${price} جنيه (بدون سعر العمل).`;
  }));
  target.scrollIntoView({ behavior: "smooth", block: "nearest" });
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
        <a href="${service.videoUrl}" target="_blank" rel="noopener">
          <span class="youtube-mark">▶</span>
          <strong>فيديو تعريفي</strong>
          <small>افتح الفيديو الإرشادي على YouTube</small>
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
              <a class="hospital-location" href="${mapSearchHref(name, address)}" target="_blank" rel="noopener"><span aria-hidden="true">⌖</span> فتح الموقع</a>
            </div>
          </section>
        `).join("")}
      </div>
      ${serviceActions({ pdf: officeDocumentFor("hospitals") })}
    </article>
  `;
  bindBackButton();
  resetWorkspaceScroll();
}

function mapSearchHref(name, address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} ${address}`)}`;
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
  const documentUrl = officeDocumentFor(serviceId) || service.pdf;
  return `
    <div class="sheet-actions ${serviceId ? "voice-tools" : ""}">
      ${serviceId ? voiceTools(serviceId) : ""}
      ${documentUrl && documentUrl !== "#" ? `<a class="primary-button pdf-action" aria-label="فتح الدليل التفصيلي" href="${documentUrl}" target="_blank" rel="noopener">فتح الدليل</a>` : ""}
      <button class="ghost-button back-action" type="button" data-back aria-label="رجوع لخدمات الجهة">
        <span aria-hidden="true">↩</span>
      </button>
      ${serviceId ? `<p class="voice-status" aria-live="polite"></p>` : ""}
    </div>
  `;
}

function officeDocumentFor(serviceId) {
  return officeServiceDocuments[activeUnitId]?.[serviceId] || "";
}

function officeDocumentAction(serviceId) {
  const documentUrl = officeDocumentFor(serviceId);
  return documentUrl ? `<a class="primary-button pdf-action" aria-label="فتح الدليل التفصيلي" href="${documentUrl}" target="_blank" rel="noopener">فتح الدليل</a>` : "";
}

function bindBackButton() {
  workspaceContent.querySelector("[data-back]").addEventListener("click", () => {
    if (history.state?.workspace && ["service", "map"].includes(history.state.view)) {
      history.back();
      return;
    }
    openUnit(activeUnitId);
  });
  bindVoiceTools();
}

function bindVoiceTools() {
  const listenButton = workspaceContent.querySelector("[data-listen-service]");
  const copyButton = workspaceContent.querySelector("[data-copy-service]");
  const status = workspaceContent.querySelector(".voice-status");
  if (!listenButton || !copyButton || !status) return;
  const readableText = () => workspaceContent.querySelector(".service-sheet").innerText
    .replace(/استمع للخدمة|إعادة|نسخ التفاصيل|فتح الدليل|رجوع لخدمات الجهة/g, "")
    .trim();
  listenButton.addEventListener("click", (event) => {
    const audioSrc = listenButton.dataset.audioSrc;
    const audioName = listenButton.dataset.audioName;
    if (!audioSrc) {
      status.textContent = `الخدمة جاهزة للصوت. أضف الملف باسم: ${audioName}`;
      return;
    }
    if (event.target.closest(".replay-chip")) {
      startServiceAudio(audioSrc, status, { restart: true });
      return;
    }
    if (activeAudio?.src === audioSrc && !activeAudio.audio.paused) pauseActiveAudio(status);
    else startServiceAudio(audioSrc, status);
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

function startServiceAudio(src, status, options = {}) {
  if (activeAudio?.src !== src) {
    stopActiveAudio();
    const audio = new Audio(encodeURI(src));
    activeAudio = { src, audio, status };
    audio.addEventListener("ended", () => {
      if (activeAudio?.audio === audio) {
        status.textContent = "انتهى التشغيل.";
        stopActiveAudio(false);
      }
    });
    audio.addEventListener("error", () => {
      if (activeAudio?.audio === audio) {
        status.textContent = "تعذر تشغيل الملف الصوتي على هذا المتصفح.";
        stopActiveAudio(false);
      }
    });
  } else if (status) {
    activeAudio.status = status;
  }
  if (options.restart) activeAudio.audio.currentTime = 0;
  playActiveAudio();
}

function playActiveAudio() {
  if (!activeAudio) return;
  activeAudio.audio.play().then(() => {
    if (!activeAudio) return;
    activeAudio.status && (activeAudio.status.textContent = activeAudio.audio.currentTime > 0 ? "جارٍ استكمال الصوت…" : "جارٍ تشغيل الخدمة صوتيًا…");
    audioFloat.hidden = false;
    audioFloat.classList.add("is-playing");
    audioToggle.textContent = "Ⅱ";
    audioToggle.setAttribute("aria-label", "إيقاف الصوت مؤقتًا");
  }).catch(() => {
    if (activeAudio?.status) activeAudio.status.textContent = "تعذر تشغيل الصوت على هذا المتصفح.";
    stopActiveAudio(false);
  });
}

function pauseActiveAudio(status) {
  if (!activeAudio) return;
  activeAudio.audio.pause();
  (status || activeAudio.status) && ((status || activeAudio.status).textContent = "تم الإيقاف مؤقتًا. استخدم الدائرة العائمة للاستكمال.");
  audioFloat.classList.remove("is-playing");
  audioToggle.textContent = "▶";
  audioToggle.setAttribute("aria-label", "استكمال الصوت");
}

function stopActiveAudio(reset = true) {
  if (!activeAudio) return;
  activeAudio.audio.pause();
  if (reset) activeAudio.audio.currentTime = 0;
  activeAudio = null;
  audioFloat.hidden = true;
  audioFloat.classList.remove("is-playing");
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

function openWorkspace(options = {}) {
  workspace.classList.toggle("workspace-fullscreen", Boolean(options.fullScreen));
  workspace.hidden = false;
  document.body.classList.add("modal-open");
  resetWorkspaceScroll();
  workspace.classList.remove("workspace-enter");
  void workspace.offsetWidth;
  workspace.classList.add("workspace-enter");
  if (!workspaceHistoryOpen && !options.skipHistory) {
    history.pushState({ workspace: true, view: "unit", unitId: activeUnitId }, "", "#workspace");
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
  workspace.classList.remove("workspace-fullscreen");
  updateBodyLock();
  clearTimeout(locationTimer);
  workspaceHistoryOpen = false;
  if (!options.skipHistory && history.state?.workspace) {
    history.go(history.state.view === "unit" ? -1 : -2);
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
  albumImage.onload = () => {
    albumImage.parentElement?.classList.toggle("is-portrait", albumImage.naturalHeight > albumImage.naturalWidth);
  };
  albumImage.parentElement?.classList.remove("is-portrait");
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
