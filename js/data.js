// Recipe Data
const recipes = [
    {
        id: 1,
        name: "كوكيز الشوكولاتة المثالي",
        category: "كلاسيكي",
        time: "25 دقيقة",
        image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg",
        description: "الكوكيز الأساسي مع قطع الشوكولاتة الداكنة الفاخرة ونسبة مثالية من المضغ إلى القرمشة.",
        difficulty: "سهل",
        servings: "24 قطعة"
    },
    {
        id: 2,
        name: "كوكيز الشوكولاتة المضاعفة",
        category: "شوكولاتة",
        time: "30 دقيقة",
        image: "https://images.pexels.com/photos/4686818/pexels-photo-4686818.jpeg",
        description: "كوكيز غني بالكاكاو مع قطع الشوكولاتة الداكنة التي تذوب في فمك لعشاق الشوكولاتة الحقيقيين.",
        difficulty: "متوسط",
        servings: "20 قطعة"
    },
    {
        id: 3,
        name: "شورت بريد اسكتلندي",
        category: "زبدة",
        time: "40 دقيقة",
        image: "https://images.pexels.com/photos/4686822/pexels-photo-4686822.jpeg",
        description: "وصفة تقليدية بثلاث مكونات فقط تخلق أرق وأزبد فتات.",
        difficulty: "سهل",
        servings: "16 قطعة"
    }
];

// Tips Data
const tips = [
    {
        icon: "fas fa-temperature-low",
        title: "درجة الحرارة مهمة",
        description: "يجب أن تكون الزبدة في درجة حرارة الغرفة الباردة (حوالي 18 درجة مئوية). اختبرها بالضغط بإصبعك - يجب أن تستجيب قليلاً لكن لا تكون دهنية أو ذائبة."
    },
    {
        icon: "fas fa-clock",
        title: "برد العجين",
        description: "تبريد عجين الكوكيز لمدة 30 دقيقة على الأقل (أو حتى 72 ساعة) يطور النكهة ويمنع الانتشار المفرط أثناء الخبز."
    },
    {
        icon: "fas fa-ruler-combined",
        title: "الحجم المتسق",
        description: "استخدم مغرفة الكوكيز للحصول على أحجام موحدة. هذا يضمن خبزاً متساوياً ونتائج تبدو احترافية في كل مرة."
    }
];

// Testimonials Data
const testimonials = [
    {
        name: "سارة م.",
        role: "خبازة منزلية",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        rating: 5,
        text: "وصفة كوكيز الشوكولاتة مثالية تماماً. لم أحصل على كوكيز بهذا الثبات الرائع من قبل. عائلتي تطلبها أسبوعياً!"
    },
    {
        name: "أحمد ت.",
        role: "عاشق المعجنات",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
        rating: 5,
        text: "هذه النصائح حولت كوكيزي من أقراص مسطحة إلى حلويات تبدو احترافية. نصيحة التبريد أحدثت كل الفرق!"
    },
    {
        name: "عائلة الأحمد",
        role: "خبازون عائليون",
        avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
        rating: 5,
        text: "اتبعنا دليل التكيف الخالي من الغلوتين وكنا مندهشين من النتائج. أخيراً، كوكيز بقوام مثالي يحبه الجميع!"
    }
];