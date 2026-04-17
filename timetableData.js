const SLOTS = [
    { id: 1, time: "9:10–10:00" },
    { id: 2, time: "10:05–10:55" },
    { id: 3, time: "11:00–11:50" },
    { id: 4, time: "11:50–12:40" },
    { id: 5, time: "12:40–13:30" },
    { id: 6, time: "13:30–14:20" },
    { id: 7, time: "14:20–15:10" },
    { id: 8, time: "15:10–16:00" },
];

const DAYS = ["Mo", "Tu", "We", "Th", "Fr"];

const DAY_LABELS = { Mo: "Monday", Tu: "Tuesday", We: "Wednesday", Th: "Thursday", Fr: "Friday" };

// Full display names → email env-var suffix mapping
// Key must exactly match timetable trainer name

    
const FACULTY_EMAIL_KEYS = {
  "Abhishek Singh": "FACULTY_EMAIL_ABHISHEK_SINGH",
  "Gyan C. Vishwakarma": "FACULTY_EMAIL_GYAN_C_VISHWAKARMA",
  "S.P. Acharya": "FACULTY_EMAIL_SP_ACHARYA",
  "Love Porwal": "FACULTY_EMAIL_LOVE_PORWAL",
  "Pratik Raj Verma": "FACULTY_EMAIL_PRATIK_RAJ_VERMA",
  "Shadav": "FACULTY_EMAIL_SHADAV",
  "Devendra K. Gupta": "FACULTY_EMAIL_DEVENDRA_K_GUPTA",
  "Nandan Mishra": "FACULTY_EMAIL_NANDAN_MISHRA",
  "Bhavesh": "FACULTY_EMAIL_BHAVESH",
  "Vishal Kumar": "FACULTY_EMAIL_VISHAL_KUMAR",
  "Rajesh K. Gupta": "FACULTY_EMAIL_RAJESH_K_GUPTA",
  "Shaquib": "FACULTY_EMAIL_SHAQUIB",
  "Suman Das": "FACULTY_EMAIL_SUMAN_DAS",
  "Akash Tiwari": "FACULTY_EMAIL_AKASH_TIWARI",
  "Himanshu": "FACULTY_EMAIL_HIMANSHU",
  "Vibha": "FACULTY_EMAIL_VIBHA"
};

const TIMETABLE = {
  "Abhishek Singh": {
    Mo: {
      3: { c: "Competitive Coding-IV", b: "A-BTech CSE(AI&ML) 6th Sem", r: "Smart Panel-D015-60" },
      7: { c: "Competitive Coding-IV", b: "B-BTech CSE 6th Sem", r: "Smart Panel-D003-60" },
      8: { c: "Competitive Coding-IV", b: "B-BTech CSE 6th Sem", r: "Smart Panel-D003-60" },
    },
    Tu: {
      3: { c: "Competitive Coding-II", b: "B-BTech CSE/C-BTech CSE(AI&ML) 4th Sem", r: "A113-110-LRP" },
      4: { c: "Competitive Coding-II", b: "B-BTech CSE/C-BTech CSE(AI&ML) 4th Sem", r: "A113-110-LRP" },
      7: { c: "Competitive Coding-IV", b: "B-BTech CSE(AI&ML) 6th Sem", r: "Smart Panel-D115-60" },
      8: { c: "Competitive Coding-IV", b: "B-BTech CSE(AI&ML) 6th Sem", r: "Smart Panel-D115-60" },
    },
    We: {
      7: { c: "Competitive Coding-IV", b: "B-BTech CSE 6th Sem", r: "Smart Panel-D003-60" },
      8: { c: "Competitive Coding-IV", b: "B-BTech CSE 6th Sem", r: "Smart Panel-D003-60" },
    },
    Th: {
      3: { c: "Competitive Coding-IV", b: "A-BTech CSE(AI&ML) 6th Sem", r: "Smart Panel-D015-60" },
      4: { c: "Competitive Coding-IV", b: "A-BTech CSE(AI&ML) 6th Sem", r: "Smart Panel-D015-60" },
    },
    Fr: {
      3: { c: "Competitive Coding-IV", b: "B-BTech CSE(AI&ML) 6th Sem", r: "Smart Panel-D115-60" },
      4: { c: "Competitive Coding-II", b: "B-BTech CSE/C-BTech CSE(AI&ML) 4th Sem", r: "A313-110-LRP" },
      7: { c: "Competitive Coding-II", b: "C-BTech CSE/C-BTech CSE(AI&ML) 4th Sem", r: "A313-110-LRP" },
      8: { c: "Competitive Coding-II", b: "C-BTech CSE/C-BTech CSE(AI&ML) 4th Sem", r: "A313-110-LRP" },
    },
  },
  "Gyan C. Vishwakarma": {
    Mo: {
      1: { c: "Interactive FE Dev", b: "B-BCA SPAI&DS Sem2", r: "Smart Panel-B208-48" },
      5: { c: "Interactive FE Dev LAB", b: "D-BCA SPAI&DS Sem2", r: "LAB-06 B402-(72)" },
      6: { c: "Interactive FE Dev LAB", b: "D-BCA SPAI&DS Sem2", r: "LAB-06 B402-(72)" },
    },
    Tu: {
      1: { c: "Interactive FE Dev LAB", b: "B-BCA SPAI&DS Sem2", r: "LAB-06 B402-(72)" },
      2: { c: "Interactive FE Dev LAB", b: "B-BCA SPAI&DS Sem2", r: "LAB-06 B402-(72)" },
      3: { c: "Interactive FE Dev", b: "D-BCA SPAI&DS Sem2", r: "Projector-B311-48" },
      7: { c: "Interactive FE Dev", b: "C-BCA SPAI&DS Sem2", r: "Smart Panel-B312-48" },
      8: { c: "Interactive FE Dev", b: "C-BCA SPAI&DS Sem2", r: "Smart Panel-B312-48" },
    },
    We: {
      3: { c: "Interactive FE Dev LAB", b: "C-BCA SPAI&DS Sem2", r: "LAB-06 B402-(72)" },
      4: { c: "Interactive FE Dev LAB", b: "C-BCA SPAI&DS Sem2", r: "LAB-06 B402-(72)" },
      5: { c: "Interactive FE Dev", b: "B-BCA SPAI&DS Sem2", r: "Smart Panel-B313-48" },
      6: { c: "Interactive FE Dev", b: "B-BCA SPAI&DS Sem2", r: "Smart Panel-B315-48" },
    },
    Th: {
      5: { c: "Interactive FE Dev", b: "D-BCA SPAI&DS Sem2", r: "Projector-B311-48" },
    },
    Fr: {
      6: { c: "Interactive FE Dev", b: "D-BCA SPAI&DS Sem2", r: "Smart Panel-B317-48" },
      7: { c: "Interactive FE Dev", b: "C-BCA SPAI&DS Sem2", r: "Projector-B314-48" },
    },
  },
  "S.P. Acharya": {
    Mo: {
      5: { c: "Web Dev-II (React)", b: "E-BTech CSE Sem2", r: "Smart Panel-B218-48" },
      7: { c: "Web Dev-II (React) LAB", b: "A-BTech CSE Sem2", r: "LAB-03-(64)" },
      8: { c: "Web Dev-II (React) LAB", b: "A-BTech CSE Sem2", r: "LAB-03-(64)" },
    },
    Tu: {
      1: { c: "Interactive Front-End Dev", b: "A-BCA SPAI&DS Sem2", r: "Smart Panel-A101-80" },
      3: { c: "Web Dev-II (React) LAB", b: "B-BTech CSE(AI&ML) Sem2", r: "LAB-03-(64)" },
      4: { c: "Web Dev-II (React) LAB", b: "B-BTech CSE(AI&ML) Sem2", r: "LAB-03-(64)" },
      7: { c: "Web Dev-II (React)", b: "A-BTech CSE Sem2", r: "Smart Panel-B216-48" },
      8: { c: "Web Dev-II (React)", b: "A-BTech CSE Sem2", r: "Smart Panel-B216-48" },
    },
    We: {
      1: { c: "Interactive Front-End Dev", b: "A-BCA SPAI&DS Sem2", r: "Smart Panel-A101-80" },
      2: { c: "Interactive Front-End Dev", b: "A-BCA SPAI&DS Sem2", r: "Smart Panel-A101-80" },
      6: { c: "Web Dev-II (React)", b: "A-BTech CSE Sem2", r: "Smart Panel-B213-48" },
      7: { c: "Web Dev-II (React)", b: "B-BTech CSE(AI&ML) Sem2", r: "Smart Panel-B217-48" },
      8: { c: "Web Dev-II (React)", b: "B-BTech CSE(AI&ML) Sem2", r: "Smart Panel-B217-48" },
    },
    Th: {
      1: { c: "Web Dev-II (React) LAB", b: "E-BTech CSE Sem2", r: "LAB-03-(64)" },
      2: { c: "Web Dev-II (React) LAB", b: "E-BTech CSE Sem2", r: "LAB-03-(64)" },
      3: { c: "Web Dev-II (React)", b: "B-BTech CSE(AI&ML) Sem2", r: "Smart Panel-B218-48" },
    },
    Fr: {
      3: { c: "Web Dev-II (React)", b: "E-BTech CSE Sem2", r: "Smart Panel-B222-48" },
      4: { c: "Web Dev-II (React)", b: "E-BTech CSE Sem2", r: "Smart Panel-B222-48" },
      7: { c: "Interactive FE Dev LAB", b: "A-BCA SPAI&DS Sem2", r: "LAB-20 B517-(72)" },
      8: { c: "Interactive FE Dev LAB", b: "A-BCA SPAI&DS Sem2", r: "LAB-20 B517-(72)" },
    },
  },
  "Love Porwal": {
    Mo: {
      1: { c: "Web Dev-II (React)", b: "E-BTech CSE(AI&ML) Sem2", r: "Projector-B220-48" },
      2: { c: "Web Dev-II (React)", b: "E-BTech CSE(AI&ML) Sem2", r: "Projector-B220-48" },
      7: { c: "Web Dev-II (React)", b: "D-BTech CSE Sem2", r: "Smart Panel-B217-48" },
      8: { c: "Web Dev-II (React)", b: "D-BTech CSE Sem2", r: "Smart Panel-B217-48" },
    },
    Tu: {
      3: { c: "Web Dev-II (React)", b: "C-BTech CSE Sem2", r: "Smart Panel-B217-48" },
      4: { c: "Web Dev-II (React)", b: "C-BTech CSE Sem2", r: "Smart Panel-B217-48" },
    },
    We: {
      1: { c: "Web Dev-II (React)", b: "D-BTech CSE Sem2", r: "Smart Panel-B217-48" },
      3: { c: "Web Dev-II (React)", b: "G-BTech CSE(AI&ML) Sem2", r: "Smart Panel-B222-48" },
      7: { c: "Web Dev-II (React) LAB", b: "D-BTech CSE Sem2", r: "LAB-03-(64)" },
      8: { c: "Web Dev-II (React) LAB", b: "D-BTech CSE Sem2", r: "LAB-03-(64)" },
    },
    Th: {
      1: { c: "Web Dev-II (React) LAB", b: "E-BTech CSE(AI&ML) Sem2", r: "LAB-19 B504-(72)" },
      2: { c: "Web Dev-II (React) LAB", b: "E-BTech CSE(AI&ML) Sem2", r: "LAB-19 B504-(72)" },
      3: { c: "Web Dev-II (React)", b: "C-BTech CSE Sem2", r: "Smart Panel-B121-48" },
      6: { c: "Web Dev-II (React)", b: "G-BTech CSE(AI&ML) Sem2", r: "Smart Panel-B222-48" },
      7: { c: "Web Dev-II (React)", b: "G-BTech CSE(AI&ML) Sem2", r: "Smart Panel-B222-48" },
    },
    Fr: {
      3: { c: "Web Dev-II (React) LAB", b: "C-BTech CSE Sem2", r: "LAB-20 B517-(72)" },
      4: { c: "Web Dev-II (React) LAB", b: "C-BTech CSE Sem2", r: "LAB-20 B517-(72)" },
      5: { c: "Web Dev-II (React) LAB", b: "G-BTech CSE(AI&ML) Sem2", r: "LAB-20 B517-(72)" },
      6: { c: "Web Dev-II (React) LAB", b: "G-BTech CSE(AI&ML) Sem2", r: "LAB-20 B517-(72)" },
      8: { c: "Web Dev-II (React)", b: "E-BTech CSE(AI&ML) Sem2", r: "Projector-B220-48" },
    },
  },
  "Pratik Raj Verma": {
    Mo: {
      1: { c: "Web Dev-II (React)", b: "A-BTech CSE(AI&ML) Sem2", r: "Smart Panel-A115-80" },
      2: { c: "Web Dev-II (React)", b: "A-BTech CSE(AI&ML) Sem2", r: "Smart Panel-A115-80" },
      3: { c: "Interactive FE Dev", b: "BCA(CyberSec)/BCA(Hons) Sem2", r: "Projector-B215-48" },
      7: { c: "Web Dev-II (React) LAB", b: "D-BTech CSE(AI&ML) Sem2", r: "LAB-20 B517-(72)" },
      8: { c: "Web Dev-II (React) LAB", b: "D-BTech CSE(AI&ML) Sem2", r: "LAB-20 B517-(72)" },
    },
    Tu: {
      1: { c: "Web Dev-II (React)", b: "D-BTech CSE(AI&ML) Sem2", r: "Smart Panel-B219-48" },
      2: { c: "Web Dev-II (React)", b: "D-BTech CSE(AI&ML) Sem2", r: "Smart Panel-B219-48" },
      7: { c: "Web Dev-II (React)", b: "BTech CSE(Robotics&AI) Sem2", r: "Smart Panel-A105-60" },
      8: { c: "Web Dev-II (React)", b: "BTech CSE(Robotics&AI) Sem2", r: "Smart Panel-A105-60" },
    },
    We: {
      1: { c: "Interactive FE Dev", b: "BCA(CyberSec)/BCA(Hons) Sem2", r: "Projector-B215-48" },
      2: { c: "Interactive FE Dev", b: "BCA(CyberSec)/BCA(Hons) Sem2", r: "Projector-B215-48" },
      3: { c: "Web Dev-II (React) LAB", b: "A-BTech CSE(AI&ML) Sem2", r: "LAB-19 B504-(72)" },
      4: { c: "Web Dev-II (React) LAB", b: "A-BTech CSE(AI&ML) Sem2", r: "LAB-19 B504-(72)" },
      7: { c: "Web Dev-II (React)", b: "D-BTech CSE(AI&ML) Sem2", r: "Projector-B215-48" },
      8: { c: "Web Dev-II (React)", b: "A-BTech CSE(AI&ML) Sem2", r: "Smart Panel-A115-80" },
    },
    Th: {
      1: { c: "Interactive FE Dev LAB", b: "BCA(CyberSec)/BCA(Hons) Sem2", r: "LAB-01-(64)" },
      2: { c: "Interactive FE Dev LAB", b: "BCA(CyberSec)/BCA(Hons) Sem2", r: "LAB-01-(64)" },
    },
    Fr: {
      1: { c: "Web Dev-II (React) LAB", b: "BTech CSE(Robotics&AI) Sem2", r: "LAB-11-BL-A Block-(36)" },
      2: { c: "Web Dev-II (React) LAB", b: "BTech CSE(Robotics&AI) Sem2", r: "LAB-11-BL-A Block-(36)" },
      3: { c: "Web Dev-II (React)", b: "BTech CSE(Robotics&AI) Sem2", r: "Projector-A109-80" },
    },
  },
  "Shadav": {
    Mo: {
      1: { c: "Web Dev-II (React)", b: "BTech CSE(DS)IBM Sem2", r: "Smart Panel-B317-48" },
      3: { c: "Web Dev-II (React) LAB", b: "A-BTech CSE(FullStack)/UX Sem2", r: "LAB-03-(64)" },
      4: { c: "Web Dev-II (React) LAB", b: "A-BTech CSE(FullStack)/UX Sem2", r: "LAB-03-(64)" },
      5: { c: "Web Dev-II (React) LAB", b: "BSc(H) CS/CyberSec/DS Sem2", r: "LAB-11-BL-A Block-(36)" },
      6: { c: "Web Dev-II (React) LAB", b: "BSc(H) CS/CyberSec/DS Sem2", r: "LAB-11-BL-A Block-(36)" },
      8: { c: "Web Dev-II (React)", b: "F-BTech CSE(AI&ML) Sem2", r: "Projector-B220-48" },
    },
    Tu: {
      2: { c: "Web Dev-II (React)", b: "BSc(H) CS/CyberSec/DS Sem2", r: "Smart Panel-B318-48" },
      3: { c: "Web Dev-II (React)", b: "BSc(H) CS/CyberSec/DS Sem2", r: "Smart Panel-B318-48" },
      8: { c: "Web Dev-II (React)", b: "BTech CSE(DS)IBM Sem2", r: "Smart Panel-B317-48" },
    },
    We: {
      1: { c: "Web Dev-II (React)", b: "BTech CSE(DS)IBM Sem2", r: "Smart Panel-B317-48" },
      5: { c: "Web Dev-II (React)", b: "F-BTech CSE(AI&ML) Sem2", r: "Projector-B220-48" },
      7: { c: "Web Dev-II (React) LAB", b: "BTech CSE(DS)IBM Sem2", r: "LAB-20 B517-(72)" },
      8: { c: "Web Dev-II (React) LAB", b: "BTech CSE(DS)IBM Sem2", r: "LAB-20 B517-(72)" },
    },
    Th: {
      1: { c: "Web Dev-II (React)", b: "A-BTech CSE(FullStack)/UX Sem2", r: "Smart Panel-B316-48" },
      2: { c: "Web Dev-II (React)", b: "A-BTech CSE(FullStack)/UX Sem2", r: "Smart Panel-B316-48" },
      7: { c: "Web Dev-II (React) LAB", b: "F-BTech CSE(AI&ML) Sem2", r: "LAB-20 B517-(72)" },
      8: { c: "Web Dev-II (React) LAB", b: "F-BTech CSE(AI&ML) Sem2", r: "LAB-20 B517-(72)" },
    },
    Fr: {
      3: { c: "Web Dev-II (React)", b: "A-BTech CSE(FullStack)/UX Sem2", r: "Smart Panel-B316-48" },
      4: { c: "Web Dev-II (React)", b: "F-BTech CSE(AI&ML) Sem2", r: "Smart Panel-B219-48" },
      6: { c: "Web Dev-II (React)", b: "BSc(H) CS/CyberSec/DS Sem2", r: "Smart Panel-B318-48" },
    },
  },
  "Devendra K. Gupta": {
    Mo: {
      1: { c: "Web Dev-II (React) LAB", b: "B-BTech CSE Sem2", r: "LAB-03-(64)" },
      2: { c: "Web Dev-II (React) LAB", b: "B-BTech CSE Sem2", r: "LAB-03-(64)" },
      4: { c: "Web Dev-II (React)", b: "B-BTech CSE(FullStack) Sem2", r: "Smart Panel-B316-48" },
      6: { c: "Web Dev-II (React)", b: "B-BTech CSE Sem2", r: "Projector-B314-48" },
    },
    Tu: {
      3: { c: "Web Dev-II (React) LAB", b: "C-BTech CSE(AI&ML) Sem2", r: "LAB-20 B517-(72)" },
      4: { c: "Web Dev-II (React) LAB", b: "C-BTech CSE(AI&ML) Sem2", r: "LAB-20 B517-(72)" },
      7: { c: "Web Dev-II (React)", b: "BTech CSE(CyberSec) EC-Council Sem2", r: "Smart Panel-B317-48" },
      8: { c: "Web Dev-II (React)", b: "C-BTech CSE(AI&ML) Sem2", r: "Projector-B215-48" },
    },
    We: {
      3: { c: "Web Dev-II (React) LAB", b: "BTech CSE(CyberSec) EC-Council Sem2", r: "LAB-01-(64)" },
      4: { c: "Web Dev-II (React) LAB", b: "BTech CSE(CyberSec) EC-Council Sem2", r: "LAB-01-(64)" },
      7: { c: "Web Dev-II (React)", b: "C-BTech CSE(AI&ML) Sem2", r: "Smart Panel-B216-48" },
      8: { c: "Web Dev-II (React)", b: "C-BTech CSE(AI&ML) Sem2", r: "Smart Panel-B216-48" },
    },
    Th: {
      3: { c: "Web Dev-II (React)", b: "BTech CSE(CyberSec) EC-Council Sem2", r: "Smart Panel-B317-48" },
      7: { c: "Web Dev-II (React)", b: "B-BTech CSE(FullStack) Sem2", r: "Smart Panel-B316-48" },
      8: { c: "Web Dev-II (React)", b: "B-BTech CSE(FullStack) Sem2", r: "Smart Panel-B316-48" },
    },
    Fr: {
      3: { c: "Web Dev-II (React) LAB", b: "B-BTech CSE(FullStack) Sem2", r: "LAB-03-(64)" },
      4: { c: "Web Dev-II (React) LAB", b: "B-BTech CSE(FullStack) Sem2", r: "LAB-03-(64)" },
      5: { c: "Web Dev-II (React)", b: "BTech CSE(CyberSec) EC-Council Sem2", r: "Smart Panel-B317-48" },
      7: { c: "Web Dev-II (React)", b: "B-BTech CSE Sem2", r: "Smart Panel-B216-48" },
      8: { c: "Web Dev-II (React)", b: "B-BTech CSE Sem2", r: "Smart Panel-B216-48" },
    },
  },
  "Nandan Mishra": {
    Mo: {
      1: { c: "Competitive Coding-IV", b: "D-BTech CSE(AI&ML) 6th Sem", r: "Smart Panel-D019-60" },
      2: { c: "Basics of DS LAB", b: "B-BCA SPAI&DS Sem2", r: "LAB-06 B402-(72)" },
      3: { c: "Basics of DS LAB", b: "B-BCA SPAI&DS Sem2", r: "LAB-06 B402-(72)" },
      4: { c: "Basics of DS LAB", b: "B-BCA SPAI&DS Sem2", r: "LAB-06 B402-(72)" },
      7: { c: "Competitive Coding-IV", b: "E-BTech CSE(AI&ML) 6th Sem", r: "Smart Panel-D006-60" },
      8: { c: "Competitive Coding-IV", b: "E-BTech CSE(AI&ML) 6th Sem", r: "Smart Panel-D006-60" },
    },
    Tu: {
      1: { c: "Competitive Coding-IV", b: "D-BTech CSE(AI&ML) 6th Sem", r: "Smart Panel-D019-60" },
      2: { c: "Competitive Coding-IV", b: "D-BTech CSE(AI&ML) 6th Sem", r: "Smart Panel-D019-60" },
      3: { c: "Competitive Coding-IV", b: "E-BTech CSE(AI&ML) 6th Sem", r: "Smart Panel-D006-60" },
      4: { c: "Competitive Coding-IV", b: "E-BTech CSE(AI&ML) 6th Sem", r: "Smart Panel-D006-60" },
    },
    We: {
      3: { c: "Competitive Coding-IV", b: "BTech CSE(FullStack/CyberSec) 6th Sem", r: "Smart Panel-D106-60" },
      4: { c: "Competitive Coding-IV", b: "BTech CSE(FullStack/CyberSec) 6th Sem", r: "Smart Panel-D106-60" },
      7: { c: "Competitive Coding-IV", b: "C-BTech CSE(AI&ML) 6th Sem", r: "Smart Panel-D017-60" },
      8: { c: "Competitive Coding-IV", b: "C-BTech CSE(AI&ML) 6th Sem", r: "Smart Panel-D017-60" },
    },
    Th: {
      1: { c: "Competitive Coding-IV", b: "C-BTech CSE(AI&ML) 6th Sem", r: "Smart Panel-D017-60" },
      2: { c: "Competitive Coding-IV", b: "C-BTech CSE(AI&ML) 6th Sem", r: "Smart Panel-D017-60" },
      3: { c: "Basics of DS", b: "B-BCA SPAI&DS Sem2", r: "Smart Panel-B315-48" },
    },
    Fr: {
      1: { c: "Competitive Coding-IV", b: "BTech CSE(FullStack/CyberSec) 6th Sem", r: "Smart Panel-D106-60" },
      7: { c: "Basics of DS", b: "B-BCA SPAI&DS Sem2", r: "Projector-B311-48" },
      8: { c: "Basics of DS", b: "B-BCA SPAI&DS Sem2", r: "Projector-B311-48" },
    },
  },
  "Bhavesh": {
    Mo: {
      1: { c: "Competitive Coding-II", b: "A-BTech CSE/AI&ML 4th Sem", r: "A113-110-LRP" },
      2: { c: "Competitive Coding-II", b: "A-BTech CSE/AI&ML 4th Sem", r: "A113-110-LRP" },
      3: { c: "Competitive Coding-II", b: "D-BTech CSE(AI&ML)/FullStack 4th Sem", r: "A113-110-LRP" },
      4: { c: "Competitive Coding-II", b: "D-BTech CSE(AI&ML)/FullStack 4th Sem", r: "A113-110-LRP" },
      7: { c: "Competitive Coding-II", b: "BTech CSE(CyberSec/DS) 4th Sem", r: "A113-110-LRP" },
      8: { c: "Competitive Coding-II", b: "BTech CSE(CyberSec/DS) 4th Sem", r: "A113-110-LRP" },
    },
    Tu: {
      3: { c: "Competitive Coding-IV", b: "E-BTech CSE 6th Sem", r: "Smart Panel-D008-60" },
      4: { c: "Competitive Coding-II", b: "BTech CSE(CyberSec/DS) 4th Sem", r: "A113-110-LRP" },
      7: { c: "Competitive Coding-II", b: "BTech CSE(CyberSec/DS) 4th Sem", r: "A113-110-LRP" },
      8: { c: "Competitive Coding-II", b: "BTech CSE(CyberSec/DS) 4th Sem", r: "A113-110-LRP" },
    },
    We: {
      1: { c: "Competitive Coding-II", b: "A-BTech CSE/AI&ML 4th Sem", r: "A313-110-LRP" },
      2: { c: "Competitive Coding-II", b: "A-BTech CSE/AI&ML 4th Sem", r: "A313-110-LRP" },
      7: { c: "Competitive Coding-II", b: "D-BTech CSE(AI&ML)/FullStack 4th Sem", r: "A113-110-LRP" },
      8: { c: "Competitive Coding-II", b: "D-BTech CSE(AI&ML)/FullStack 4th Sem", r: "A113-110-LRP" },
    },
    Th: {
      7: { c: "Competitive Coding-IV", b: "C-BTech CSE 6th Sem", r: "Smart Panel-D005-60" },
      8: { c: "Competitive Coding-IV", b: "C-BTech CSE 6th Sem", r: "Smart Panel-D005-60" },
    },
    Fr: {
      1: { c: "Competitive Coding-IV", b: "E-BTech CSE 6th Sem", r: "Smart Panel-D008-60" },
      2: { c: "Competitive Coding-IV", b: "E-BTech CSE 6th Sem", r: "Smart Panel-D008-60" },
      3: { c: "Competitive Coding-IV", b: "C-BTech CSE 6th Sem", r: "Smart Panel-D008-60" },
      4: { c: "Competitive Coding-IV", b: "C-BTech CSE 6th Sem", r: "Smart Panel-D008-60" },
    },
  },
  "Vishal Kumar": {
    Mo: {
      1: { c: "Basics of DS", b: "D-BCA SPAI&DS Sem2", r: "Projector-B311-48" },
      3: { c: "Data Structures", b: "BTech CSE(CyberSec) EC-Council Sem2", r: "Smart Panel-B317-48" },
      4: { c: "Data Structures", b: "BTech CSE(CyberSec) EC-Council Sem2", r: "Smart Panel-B317-48" },
      7: { c: "Data Structures", b: "B-BTech CSE(AI&ML) Sem2", r: "Smart Panel-B218-48" },
      8: { c: "Data Structures", b: "C-BTech CSE(AI&ML) Sem2", r: "Smart Panel-B216-48" },
    },
    Tu: {
      1: { c: "Data Structures LAB", b: "BTech CSE(CyberSec) EC-Council Sem2", r: "LAB-20 B517-(72)" },
      2: { c: "Data Structures LAB", b: "BTech CSE(CyberSec) EC-Council Sem2", r: "LAB-20 B517-(72)" },
      4: { c: "Basics of DS", b: "D-BCA SPAI&DS Sem2", r: "Projector-B311-48" },
      7: { c: "Basics of DS LAB", b: "D-BCA SPAI&DS Sem2", r: "LAB-06 B402-(72)" },
      8: { c: "Basics of DS LAB", b: "D-BCA SPAI&DS Sem2", r: "LAB-06 B402-(72)" },
    },
    We: {
      2: { c: "Data Structures", b: "BTech CSE(CyberSec) EC-Council Sem2", r: "Smart Panel-B316-48" },
      5: { c: "Data Structures LAB", b: "C-BTech CSE(AI&ML) Sem2", r: "LAB-03-(64)" },
      6: { c: "Data Structures LAB", b: "C-BTech CSE(AI&ML) Sem2", r: "LAB-03-(64)" },
    },
    Th: {
      1: { c: "Data Structures LAB", b: "B-BTech CSE(AI&ML) Sem2", r: "LAB-20 B517-(72)" },
      2: { c: "Data Structures LAB", b: "B-BTech CSE(AI&ML) Sem2", r: "LAB-20 B517-(72)" },
      3: { c: "Basics of DS", b: "D-BCA SPAI&DS Sem2", r: "Projector-B311-48" },
    },
    Fr: {
      3: { c: "Data Structures", b: "B-BTech CSE(AI&ML) Sem2", r: "Smart Panel-B217-48" },
      4: { c: "Data Structures", b: "B-BTech CSE(AI&ML) Sem2", r: "Smart Panel-B218-48" },
      7: { c: "Data Structures", b: "C-BTech CSE(AI&ML) Sem2", r: "Smart Panel-B217-48" },
      8: { c: "Data Structures", b: "C-BTech CSE(AI&ML) Sem2", r: "Smart Panel-B217-48" },
    },
  },
  "Rajesh K. Gupta": {
    Mo: {
      3: { c: "Competitive Coding-IV", b: "F-BTech CSE 6th Sem", r: "Smart Panel-D008-60" },
      4: { c: "Competitive Coding-IV", b: "F-BTech CSE 6th Sem", r: "Smart Panel-D008-60" },
      7: { c: "Competitive Coding-II", b: "C-BTech CSE/C-BCA(AI&DS) 4th Sem", r: "A313-110-LRP" },
      8: { c: "Competitive Coding-II", b: "C-BTech CSE/C-BCA(AI&DS) 4th Sem", r: "A313-110-LRP" },
    },
    Tu: {
      1: { c: "Competitive Coding-II", b: "A-BCA(AI&DS)/B-BTech CSE(AI&ML) 4th Sem", r: "A313-110-LRP" },
      2: { c: "Competitive Coding-II", b: "A-BCA(AI&DS)/B-BTech CSE(AI&ML) 4th Sem", r: "A313-110-LRP" },
      7: { c: "Competitive Coding-IV", b: "A-BTech CSE 6th Sem", r: "Smart Panel-D003-60" },
      8: { c: "Competitive Coding-IV", b: "A-BTech CSE 6th Sem", r: "Smart Panel-D003-60" },
    },
    We: {
      3: { c: "Competitive Coding-IV", b: "F-BTech CSE 6th Sem", r: "Smart Panel-D008-60" },
      4: { c: "Competitive Coding-IV", b: "F-BTech CSE 6th Sem", r: "Smart Panel-D008-60" },
      7: { c: "Competitive Coding-IV", b: "A-BTech CSE 6th Sem", r: "LAB-23 D010-(60)" },
      8: { c: "Competitive Coding-IV", b: "A-BTech CSE 6th Sem", r: "LAB-23 D010-(60)" },
    },
    Th: {
      3: { c: "Competitive Coding-II", b: "A-BCA(AI&DS)/B-BTech CSE(AI&ML) 4th Sem", r: "A313-110-LRP" },
      4: { c: "Competitive Coding-II", b: "A-BCA(AI&DS)/B-BTech CSE(AI&ML) 4th Sem", r: "A313-110-LRP" },
      7: { c: "Competitive Coding-II", b: "D-BTech CSE/B-BCA(AI&DS) 4th Sem", r: "A313-110-LRP" },
      8: { c: "Competitive Coding-II", b: "D-BTech CSE/B-BCA(AI&DS) 4th Sem", r: "A313-110-LRP" },
    },
    Fr: {
      1: { c: "Competitive Coding-II", b: "D-BTech CSE/B-BCA(AI&DS) 4th Sem", r: "A313-110-LRP" },
      2: { c: "Competitive Coding-II", b: "D-BTech CSE/B-BCA(AI&DS) 4th Sem", r: "A313-110-LRP" },
      5: { c: "Competitive Coding-II", b: "C-BTech CSE/C-BCA(AI&DS) 4th Sem", r: "A313-110-LRP" },
      6: { c: "Competitive Coding-II", b: "C-BTech CSE/C-BCA(AI&DS) 4th Sem", r: "A313-110-LRP" },
    },
  },
  "Shaquib": {
    Mo: {
      1: { c: "Basics of DS", b: "BCA(CyberSec)/BCA(Hons) Sem2", r: "Smart Panel-B218-48" },
      2: { c: "Basics of DS", b: "BCA(CyberSec)/BCA(Hons) Sem2", r: "Smart Panel-B218-48" },
      3: { c: "Basics of DS", b: "A-BCA SPAI&DS Sem2", r: "Smart Panel-A101-80" },
      5: { c: "Data Structures", b: "BTech CSE(DS)IBM Sem2", r: "Smart Panel-B317-48" },
      7: { c: "Competitive Coding-III", b: "BSc(H) DS/CyberSec/CS 4th Sem", r: "Smart Panel-D107-60" },
      8: { c: "Competitive Coding-III", b: "BSc(H) DS/CyberSec/CS 4th Sem", r: "Smart Panel-D107-60" },
    },
    Tu: {
      1: { c: "Data Structures", b: "BTech CSE(DS)IBM Sem2", r: "Smart Panel-B317-48" },
      2: { c: "Data Structures", b: "BTech CSE(DS)IBM Sem2", r: "Smart Panel-B317-48" },
      5: { c: "Data Structures", b: "B-BTech CSE(FullStack) Sem2", r: "Projector-B311-48" },
      6: { c: "Data Structures", b: "B-BTech CSE(FullStack) Sem2", r: "Projector-B311-48" },
      7: { c: "Competitive Coding-III", b: "BSc(H) DS/CyberSec/CS 4th Sem", r: "Smart Panel-D107-60" },
      8: { c: "Competitive Coding-III", b: "BSc(H) DS/CyberSec/CS 4th Sem", r: "Smart Panel-D107-60" },
    },
    We: {
      1: { c: "Data Structures LAB", b: "B-BTech CSE(FullStack) Sem2", r: "LAB-03-(64)" },
      2: { c: "Data Structures LAB", b: "B-BTech CSE(FullStack) Sem2", r: "LAB-03-(64)" },
      3: { c: "Basics of DS", b: "A-BCA SPAI&DS Sem2", r: "Smart Panel-A101-80" },
      5: { c: "Basics of DS LAB", b: "BCA(CyberSec)/BCA(Hons) Sem2", r: "LAB-01-(64)" },
      6: { c: "Basics of DS LAB", b: "BCA(CyberSec)/BCA(Hons) Sem2", r: "LAB-01-(64)" },
    },
    Th: {
      3: { c: "Data Structures", b: "B-BTech CSE(FullStack) Sem2", r: "Smart Panel-B316-48" },
      6: { c: "Data Structures", b: "B-BTech CSE(FullStack) Sem2", r: "Projector-B311-48" },
      7: { c: "Data Structures LAB", b: "BTech CSE(DS)IBM Sem2", r: "LAB-03-(64)" },
      8: { c: "Data Structures LAB", b: "BTech CSE(DS)IBM Sem2", r: "LAB-03-(64)" },
    },
    Fr: {
      3: { c: "Basics of DS LAB", b: "A-BCA SPAI&DS Sem2", r: "LAB-06 B402-(72)" },
      4: { c: "Basics of DS LAB", b: "A-BCA SPAI&DS Sem2", r: "LAB-06 B402-(72)" },
      6: { c: "Basics of DS", b: "A-BCA SPAI&DS Sem2", r: "Smart Panel-A101-80" },
      7: { c: "Basics of DS", b: "BCA(CyberSec)/BCA(Hons) Sem2", r: "Smart Panel-B315-48" },
    },
  },
  "Suman Das": {
    Mo: {
      1: { c: "Competitive Coding-IV", b: "D-BTech CSE 6th Sem", r: "Smart Panel-D007-60" },
      3: { c: "Career Readiness (MOOC)", b: "A/B/C-BCA(AI&DS) 6th Sem", r: "Smart Panel-D113-60" },
      4: { c: "Career Readiness (MOOC)", b: "A/B/C-BCA(AI&DS) 6th Sem", r: "Smart Panel-D113-60" },
      8: { c: "Java Programming", b: "MCA Sem2", r: "Smart Panel-A103-60" },
    },
    Tu: {
      1: { c: "Java Programming", b: "MCA(AI&ML) MS Certs Sem2", r: "Smart Panel-A108-80" },
      2: { c: "Java Programming", b: "MCA(AI&ML) MS Certs Sem2", r: "Smart Panel-A108-80" },
      3: { c: "Competitive Coding-IV", b: "D-BTech CSE 6th Sem", r: "Smart Panel-D007-60" },
      4: { c: "Competitive Coding-IV", b: "D-BTech CSE 6th Sem", r: "Smart Panel-D007-60" },
      7: { c: "Java Programming", b: "MCA Sem2", r: "Projector-A104-60" },
      8: { c: "Java Programming", b: "MCA Sem2", r: "Projector-A104-60" },
    },
    We: {
      1: { c: "Data Structures LAB", b: "F-BTech CSE(AI&ML) Sem2", r: "LAB-20 B517-(72)" },
      2: { c: "Data Structures LAB", b: "F-BTech CSE(AI&ML) Sem2", r: "LAB-20 B517-(72)" },
      6: { c: "Java Programming", b: "MCA(AI&ML) MS Certs Sem2", r: "Smart Panel-A115-80" },
      7: { c: "Java Programming LAB", b: "MCA(AI&ML) MS Certs Sem2", r: "LAB-06 B402-(72)" },
      8: { c: "Java Programming LAB", b: "MCA(AI&ML) MS Certs Sem2", r: "LAB-06 B402-(72)" },
    },
    Th: {
      1: { c: "Data Structures", b: "F-BTech CSE(AI&ML) Sem2", r: "Projector-B220-48" },
      2: { c: "Data Structures", b: "F-BTech CSE(AI&ML) Sem2", r: "Projector-B220-48" },
      7: { c: "Java Programming LAB", b: "MCA Sem2", r: "LAB-10-BL-A Block-(42)" },
      8: { c: "Java Programming LAB", b: "MCA Sem2", r: "LAB-10-BL-A Block-(42)" },
    },
    Fr: {
      3: { c: "Career Readiness (MOOC)", b: "A/B/C-BCA(AI&DS) 6th Sem", r: "Smart Panel-D113-60" },
      4: { c: "Career Readiness (MOOC)", b: "A/B/C-BCA(AI&DS) 6th Sem", r: "Smart Panel-D113-60" },
      5: { c: "Data Structures", b: "F-BTech CSE(AI&ML) Sem2", r: "Projector-B220-48" },
    },
  },
  "Akash Tiwari": {
    Mo: {
      3: { c: "Basics of DS", b: "C-BCA SPAI&DS Sem2", r: "Projector-B311-48" },
      5: { c: "Data Structures", b: "D-BTech CSE Sem2", r: "Smart Panel-B217-48" },
      7: { c: "Competitive Coding-IV", b: "BTech CSE(DS)IBM 6th Sem", r: "Smart Panel-D021-60" },
      8: { c: "Competitive Coding-IV", b: "BTech CSE(DS)IBM 6th Sem", r: "Smart Panel-D021-60" },
    },
    Tu: {
      1: { c: "Data Structures LAB", b: "D-BTech CSE Sem2", r: "LAB-03-(64)" },
      2: { c: "Data Structures LAB", b: "D-BTech CSE Sem2", r: "LAB-03-(64)" },
      4: { c: "Basics of DS", b: "C-BCA SPAI&DS Sem2", r: "Projector-B314-48" },
      7: { c: "Data Structures", b: "A-BTech CSE(FullStack)/UX Sem2", r: "Smart Panel-B316-48" },
    },
    We: {
      1: { c: "Basics of DS", b: "C-BCA SPAI&DS Sem2", r: "Smart Panel-B313-48" },
      3: { c: "Data Structures", b: "D-BTech CSE Sem2", r: "Smart Panel-B217-48" },
      6: { c: "Data Structures", b: "A-BTech CSE(FullStack)/UX Sem2", r: "Smart Panel-B316-48" },
      7: { c: "Data Structures", b: "A-BTech CSE(FullStack)/UX Sem2", r: "Smart Panel-B316-48" },
    },
    Th: {
      1: { c: "Competitive Coding-II", b: "MCA/MCA(AI&ML) Sem2", r: "A113-110-LRP" },
      2: { c: "Competitive Coding-II", b: "MCA/MCA(AI&ML) Sem2", r: "A113-110-LRP" },
      3: { c: "Data Structures", b: "D-BTech CSE Sem2", r: "Smart Panel-B217-48" },
      5: { c: "Data Structures LAB", b: "A-BTech CSE(FullStack)/UX Sem2", r: "LAB-03-(64)" },
      6: { c: "Data Structures LAB", b: "A-BTech CSE(FullStack)/UX Sem2", r: "LAB-03-(64)" },
    },
    Fr: {
      1: { c: "Competitive Coding-IV", b: "BTech CSE(DS)IBM 6th Sem", r: "Smart Panel-D110-60" },
      2: { c: "Competitive Coding-IV", b: "BTech CSE(DS)IBM 6th Sem", r: "Smart Panel-D110-60" },
      5: { c: "Basics of DS LAB", b: "C-BCA SPAI&DS Sem2", r: "LAB-19 B504-(72)" },
      6: { c: "Basics of DS LAB", b: "C-BCA SPAI&DS Sem2", r: "LAB-19 B504-(72)" },
      7: { c: "Competitive Coding-II", b: "MCA/MCA(AI&ML) Sem2", r: "A113-110-LRP" },
      8: { c: "Competitive Coding-II", b: "MCA/MCA(AI&ML) Sem2", r: "A113-110-LRP" },
    },
  },
  "Himanshu": {
    Mo: {
      3: { c: "Data Structures LAB", b: "B-BTech CSE Sem2", r: "LAB-20 B517-(72)" },
      4: { c: "Data Structures LAB", b: "B-BTech CSE Sem2", r: "LAB-20 B517-(72)" },
      6: { c: "Data Structures", b: "E-BTech CSE Sem2", r: "Smart Panel-B218-48" },
      7: { c: "Foundational C++ for Robotics", b: "BTech CSE(Robotics&AI) Sem2", r: "Projector-A109-80" },
    },
    Tu: {
      3: { c: "Data Structures", b: "B-BTech CSE Sem2", r: "Smart Panel-B216-48" },
      4: { c: "Data Structures", b: "B-BTech CSE Sem2", r: "Smart Panel-B216-48" },
      5: { c: "Data Structures", b: "E-BTech CSE Sem2", r: "Smart Panel-B218-48" },
      7: { c: "Competitive Coding-IV", b: "BTech CSE(UX/UI) 6th Sem", r: "Smart Panel-D125-60" },
    },
    We: {
      1: { c: "Foundational C++ for Robotics", b: "BTech CSE(Robotics&AI) Sem2", r: "Projector-A104-60" },
      2: { c: "Foundational C++ for Robotics", b: "BTech CSE(Robotics&AI) Sem2", r: "Projector-A104-60" },
      3: { c: "Data Structures LAB", b: "E-BTech CSE Sem2", r: "LAB-20 B517-(72)" },
      4: { c: "Data Structures LAB", b: "E-BTech CSE Sem2", r: "LAB-20 B517-(72)" },
      7: { c: "Competitive Coding-IV", b: "G-BTech CSE 6th Sem", r: "Smart Panel-D011-60" },
      8: { c: "Competitive Coding-IV", b: "G-BTech CSE 6th Sem", r: "Smart Panel-D011-60" },
    },
    Th: {
      3: { c: "Data Structures", b: "E-BTech CSE Sem2", r: "Projector-B117-48" },
      7: { c: "Competitive Coding-IV", b: "BTech CSE(UX/UI) 6th Sem", r: "Smart Panel-D125-60" },
      8: { c: "Competitive Coding-IV", b: "BTech CSE(UX/UI) 6th Sem", r: "Smart Panel-D125-60" },
    },
    Fr: {
      1: { c: "Competitive Coding-IV", b: "G-BTech CSE 6th Sem", r: "Smart Panel-D011-60" },
      2: { c: "Competitive Coding-IV", b: "G-BTech CSE 6th Sem", r: "Smart Panel-D011-60" },
      4: { c: "Data Structures", b: "B-BTech CSE Sem2", r: "Smart Panel-B216-48" },
      5: { c: "C++ for Robotics LAB", b: "BTech CSE(Robotics&AI) Sem2", r: "LAB-11-BL-A Block-(36)" },
      6: { c: "C++ for Robotics LAB", b: "BTech CSE(Robotics&AI) Sem2", r: "LAB-11-BL-A Block-(36)" },
    },
  },
  "Vibha": {
    Mo: {
      6: { c: "Introduction to Generative AI", b: "A/B/C-BCA (H) (Sp AI & DS) Sem6", r: "Smart Panel-D113-60" },
      7: { c: "Introduction to Neural Networks and Deep Learning", b: "G-BTech CSE 2023-2027 Sem6", r: "Smart Panel-D011-60" },
      8: { c: "Introduction to Neural Networks and Deep Learning", b: "G-BTech CSE 2023-2027 Sem6", r: "Smart Panel-D011-60" },
    },
    Tu: {
      1: { c: "Introduction to Generative AI", b: "A/B/C-BCA (H) (Sp AI & DS) Sem6", r: "Smart Panel-D113-60" },
      2: { c: "Introduction to Generative AI", b: "A/B/C-BCA (H) (Sp AI & DS) Sem6", r: "Smart Panel-D113-60" },
      7: { c: "Generative AI Lab", b: "A/B/C-BCA (H) (Sp AI & DS) Sem6", r: "LAB-26 D014-(60)" },
      8: { c: "Generative AI Lab", b: "A/B/C-BCA (H) (Sp AI & DS) Sem6", r: "LAB-26 D014-(60)" },
    },
    We: {
      1: { c: "Neural Networks and Deep Learning Lab", b: "F-BTech CSE 2023-2027 Sem6", r: "LAB-24 D012-(60)" },
      2: { c: "Neural Networks and Deep Learning Lab", b: "F-BTech CSE 2023-2027 Sem6", r: "LAB-24 D012-(60)" },
      7: { c: "Introduction to Neural Networks and Deep Learning", b: "F-BTech CSE 2023-2027 Sem6", r: "Smart Panel-D008-60" },
      8: { c: "Introduction to Neural Networks and Deep Learning", b: "F-BTech CSE 2023-2027 Sem6", r: "Smart Panel-D008-60" },
    },
    Th: {
      2: { c: "Introduction to Neural Networks and Deep Learning", b: "F-BTech CSE 2023-2027 Sem6", r: "Smart Panel-D009-60" },
      3: { c: "Introduction to Neural Networks and Deep Learning", b: "F-BTech CSE 2023-2027 Sem6", r: "Smart Panel-D009-60" },
      4: { c: "Open Elective", b: "BBA/BSC/BA 2025-2027 Sem2", r: "Smart Panel-D009-60" },
      7: { c: "Introduction to Neural Networks and Deep Learning", b: "G-BTech CSE 2023-2027 Sem6", r: "Smart Panel-D011-60" },
      8: { c: "Introduction to Neural Networks and Deep Learning", b: "G-BTech CSE 2023-2027 Sem6", r: "Smart Panel-D011-60" },
    },
    Fr: {
      1: { c: "Open Elective", b: "BBA/BSC/BA 2025-2027 Sem2", r: "Smart Panel-D009-60" },
      2: { c: "Open Elective", b: "BBA/BSC/BA 2025-2027 Sem2", r: "Smart Panel-D009-60" },
      3: { c: "Neural Networks and Deep Learning Lab", b: "G-BTech CSE 2023-2027 Sem6", r: "LAB-24 D012-(60)" },
      4: { c: "Neural Networks and Deep Learning Lab", b: "G-BTech CSE 2023-2027 Sem6", r: "LAB-24 D012-(60)" },
      6: { c: "Introduction to Generative AI", b: "A/B/C-BCA (H) (Sp AI & DS) Sem6", r: "Smart Panel-D113-60" },
    },
  },
}



const TRAINER_NAMES = Object.keys(TIMETABLE);
 
const getCell = (name, day, slotId) => TIMETABLE[name]?.[day]?.[slotId] || null;
 
const weekLoad = (name) =>
  DAYS.reduce((acc, d) => acc + SLOTS.filter((s) => getCell(name, d, s.id)).length, 0);
 
const dayLoad = (name, day) =>
  SLOTS.filter((s) => getCell(name, day, s.id)).length;
 
const getSlotById = (id) => SLOTS.find((s) => s.id === Number(id));
 
module.exports = {
  SLOTS,
  DAYS,
  DAY_LABELS,
  TIMETABLE,
  TRAINER_NAMES,
  FACULTY_EMAIL_KEYS,
  getCell,
  weekLoad,
  dayLoad,
  getSlotById,
};