/* Site content. Edit this file to update publications, grants, teaching, etc.
   Sources: CV (Nov 2026), Google Scholar, ORCID. */

const SITE = {
  metrics: {
    asOf: "November 2026",
    citations: 249,
    hIndex: 8,
    i10Index: 7,
    perYear: [
      [2016, 2], [2017, 2], [2018, 1], [2019, 2], [2020, 6], [2021, 8],
      [2022, 8], [2023, 13], [2024, 37], [2025, 91], [2026, 76]
    ]
  },

  /* type: journal | conference | book | chapter | thesis */
  publications: [
    // 2026
    { y: 2026, type: "journal", a: "RMK Raja Rosli, AF Zakaria, OA Amodu", t: "A systematic review of empirical research in engineering ethics education (2020–2025): Global trends, teaching practices, and challenges", v: "European Journal of Engineering Education, 1–44" },
    { y: 2026, type: "journal", a: "SAM Dahari, AIC Ani, S Johar, RM Zin, AF Zakaria", t: "Maintenance service quality at universities under the Private Finance Initiative (PFI) procurement in Malaysia: Assessment using the SERVQUAL model", v: "PaperASIA, 42(1b), 368–376" },
    { y: 2026, type: "journal", a: "L Shiqi, AF Zakaria, HM Affandi, ZM Nopiah", t: "Perceived management challenges across income groups among independent oil palm smallholders in Malaysia", v: "Journal of Advanced Research in Business and Management Studies, 43(1), 189–198" },
    { y: 2026, type: "journal", a: "S Noranis, HM Affandi, F Wahidin, AF Zakaria", t: "Educational barriers in the sky: Drone regulation challenges in schools", v: "International Journal of Research and Innovation in Social Science, 10(10)" },
    { y: 2026, type: "conference", a: "AF Zakaria, B Selvakumaran", t: "Student preferences for makerspace-based STEM disaster preparedness activities: A preliminary discrete choice survey", v: "2026 11th International STEM Education Conference (iSTEM-Ed), 1–5" },
    { y: 2026, type: "conference", a: "RMKR Rosli, AF Zakaria, WMABW Mohd, NNB Yusoff", t: "From immediate gains to retained learning: Effects of digital role-playing game-based learning on engineering ethics education", v: "2026 11th International STEM Education Conference (iSTEM-Ed), 1–6" },

    // 2025
    { y: 2025, type: "journal", a: "JP Amos, OA Amodu, RAR Mahmood, AB Abdulqudus, AF Zakaria, AR Iyanda, UA Bukar, ZM Hanapi", t: "A bibliometric exposition and review on leveraging LLMs for programming education", v: "IEEE Access, 13, 58364–58393", doi: "10.1109/ACCESS.2025.3554627", c: 23 },
    { y: 2025, type: "journal", a: "AB Abdulqudus, OA Amodu, UA Bukar, RAR Mahmood, AF Zakaria, S-O Queen, ZM Hanapi", t: "A contemporary and comprehensive bibliometric exposition on deepfake research and trends", v: "Computers, Materials & Continua, 84(1), 153–236", c: 8 },
    { y: 2025, type: "journal", a: "US Subri, NM Ghani, RC Rus, AF Zakaria, HM Affandi", t: "Waste no more: Empowering communities through education and participation in sustainable waste management", v: "Multidisciplinary Reviews, 8(7), 2025204", c: 7 },
    { y: 2025, type: "journal", a: "M Dahuri, AIC Ani, S Johar, AF Zakaria", t: "A bibliometric exploration of building condition assessment on maintenance strategies in TVET institutions", v: "PaperASIA, 41(4b), 220–231", c: 3 },
    { y: 2025, type: "journal", a: "M Dahuri, AIC Ani, S Johar, AF Zakaria", t: "Formulating a qualitative framework for assessing SERVQUAL dimensions on maintenance service perception and budget allocation in TVET educational landscape", v: "PaperASIA, 41(4b), 360–368", c: 2 },
    { y: 2025, type: "journal", a: "R Ganasan, CG Tan, MNA Arifin, NHR Sulong, MK Omran, A El-Shafie, AF Zakaria", t: "Moment-rotation characteristics prediction models for unique boltless steel connections using machine learning", v: "Journal of Design and Built Environment, 69–86", c: 3 },
    { y: 2025, type: "journal", a: "S Noranis, HM Affandi, AF Zakaria", t: "Mapping the ecosystem: Identifying and validating constructs for drone integration in Malaysian education", v: "International Journal of Research and Innovation in Social Science, 9(7)" },
    { y: 2025, type: "journal", a: "MSS Mustafa, SS Sri Sumarwati, MA Abdul Rahman, AF Zakaria, et al.", t: "Exploring issues and problems towards implementing heating, ventilation and air conditioning (HVAC) maintenance in the Malaysian oil and gas industry", v: "International Journal of Academic Research in Business and Social Sciences", c: 1 },
    { y: 2025, type: "journal", a: "AA Muhamad Damanhuri, A Hariri, S Ab Ghani, MHF Md Fauadi, MSS Mustafa, et al.", t: "Reducing aerosol formation from SLS PA12 powder using response surface methodology via optimization of refresh rate and powder handling activities", v: "Multidisciplinary Science Journal, 7(6), 2025269" },
    { y: 2025, type: "chapter", a: "K Ramalingam, AF Zakaria, FAM Adim, R Derahman", t: "Preference analysis of career development programs among technical and vocational educators", v: "In Career Development, Digitalization and Inclusive Learning: Empowering the Workforce in Technical and Vocational Education and Training, 287–312" },
    { y: 2025, type: "conference", a: "RMKR Rosli, AF Zakaria", t: "Innovative pedagogy in engineering ethics: Validating a digital role-playing game for Malaysian pre-university students", v: "2025 10th International STEM Education Conference (iSTEM-Ed), 1–6", c: 1 },
    { y: 2025, type: "conference", a: "RMKR Rosli, AF Zakaria", t: "Showcasing a chatbot suite for multi-domain academic pre-evaluation: A score-based demonstration framework", v: "2025 IEEE 14th International Conference on Engineering Education (ICEED)" },

    // 2024
    { y: 2024, type: "journal", a: "AF Zakaria, SCJ Lim, M Aamir", t: "A pricing optimization modelling for assisted decision making in telecommunication product-service bundling", v: "International Journal of Information Management Data Insights, 4(1), 100212", doi: "10.1016/j.jjimei.2024.100212", c: 40 },
    { y: 2024, type: "journal", a: "RMKR Rosli, U Techanamurthy, AF Zakaria", t: "Impact of game-based learning on engineering education: A systematic review", v: "ASEAN Journal of Engineering Education, 8(1), 56–63", c: 17 },
    { y: 2024, type: "journal", a: "MZ Rozali, CH Go, SN Samshul, A Ismail, AF Zakaria", t: "A new digital competence framework for primary school design and technology teachers", v: "Journal of Technical Education and Training, 16(2), 175–185", c: 10 },
    { y: 2024, type: "journal", a: "NN Mohamad Sahimi, MSS Mustafa, R Muslim, NH Roslan, F Yusop, A Hariri, AF Zakaria, MF Abd Latif, H Kabrein, FA Nur Yunus", t: "Thermal comfort in a tropical climate: Case study of the cafeteria in student residential college, UTHM Pagoh Branch Campus", v: "Journal of Advanced Research in Fluid Mechanics and Thermal Sciences, 114(2), 165–187", c: 5 },
    { y: 2024, type: "journal", a: "AHM Midhal, MSS Mustafa, AF Zakaria, F Yusof, K Musa, AA Rahman, MFA Latif, M Wijayaningtyas, AR Jumat", t: "Enhancing maintenance services quality: A study of student satisfaction and maintenance strategies in student’s residential college", v: "Journal of Advanced Research in Applied Sciences and Engineering Technology, 38(2), 56–70", c: 1 },
    { y: 2024, type: "journal", a: "K Hussain, AR Jamali, S Hussain, MM Mohamad, AF Zakaria", t: "An analysis of learning styles preferences among undergraduate engineering education students", v: "Journal of Applied Engineering & Technology, 8(2), 20–30" },
    { y: 2024, type: "journal", a: "MIN Ma'arof, AF Zakaria, GT Chala, R Liang, N Ikhsan, MFM Nasir", t: "Static analysis of new lightweight racing wheel for Formula Society of Automotive Engineers (FSAE) race car for product innovation", v: "SciEnggJ", doi: "10.54645/202417SupVCB-72" },
    { y: 2024, type: "conference", a: "RMKR Rosli, AF Zakaria", t: "The impact of digital role-playing games in engineering education: A preliminary review", v: "2024 9th International STEM Education Conference (iSTEM-Ed), 1–6", c: 8 },
    { y: 2024, type: "conference", a: "RMKR Rosli, AF Zakaria", t: "Innovative pedagogy in engineering ethics: A digital game-based approach for Malaysian pre-university students", v: "2024 IEEE International Conference on Industrial Engineering and Engineering Management (IEEM), 1241–1245", c: 4 },
    { y: 2024, type: "conference", a: "MZ Rozali, AF Zakaria", t: "A data-driven design module development for enhancing multi-attribute decision-making (MADM) efficacy", v: "2024 9th International STEM Education Conference (iSTEM-Ed), 1–6", c: 1 },
    { y: 2024, type: "conference", a: "MFM Nasir, HS Hamzah, AF Zakaria", t: "Using Fuzzy Delphi Method in selecting sustainable remanufacturing elements: Supply chain perspectives", v: "2024 IEEE International Conference on Industrial Engineering and Engineering Management (IEEM), 580–584", c: 1 },
    { y: 2024, type: "conference", a: "MSS Mustafa, BMM Syahroni, MA Rosli, AAM Damanhuri, AF Zakaria, US Subri, F Ahmad", t: "Development of insulation material using bamboo fibers for thermal and sound properties", v: "AIP Conference Proceedings, 3026(1), 080001", c: 2 },

    // 2023
    { y: 2023, type: "journal", a: "AF Zakaria, MZ Rozali, MSS Mustafa", t: "A preliminary discussion on STEM-drone sport’s athlete development program toward career relevance", v: "Jurnal Kejuruteraan, SI 6(2), 135–142", c: 3 },
    { y: 2023, type: "journal", a: "RMKR Rosli, U Techanamurthy, AF Zakaria", t: "Experiential learning in engineering education: A book review", v: "ASEAN Journal of Engineering Education, 7(2), 37–41", c: 1 },
    { y: 2023, type: "book", a: "AF Zakaria", t: "Optimizing Product-Service Bundle Design: A Guide to Design Analysis and Decision Making", v: "ISBN 978-629-486-082-7", c: 2 },

    // 2022
    { y: 2022, type: "journal", a: "AF Zakaria, SCJ Lim", t: "Data analytics skill development for design education: A case study in optimal product-service bundle design", v: "Thinking Skills and Creativity, 46, 101191", doi: "10.1016/j.tsc.2022.101191", c: 7 },
    { y: 2022, type: "journal", a: "AF Zakaria, Z Hanapi, MSS Mustafa, MIN Ma'arof", t: "Exploring predictors of development and career planning among TVET educators", v: "Journal of Technical Education and Training, 14(2), 156–164", doi: "10.30880/jtet.2022.14.02.014", c: 6 },
    { y: 2022, type: "journal", a: "MSS Mustafa, AF Zakaria, SSZ Che'Om, FM Yusop, FAN Yunus, et al.", t: "Predicting job satisfaction of Malaysian mechanical ventilation and air conditioning maintenance personnel in the oil and gas sector", v: "Humanities and Social Sciences Letters, 10(3), 256–267", doi: "10.18488/73.v10i3.3045", c: 4 },
    { y: 2022, type: "journal", a: "NM Othman, A Hasan, AF Zakaria, N Bokhari", t: "Job readiness elements for hospitality graduates: A pilot study", v: "Jurnal Kejuruteraan, SI 5(2), 233–236", c: 2 },
    { y: 2022, type: "conference", a: "AF Zakaria, MFM Nasir, MSS Mustafa, US Subri", t: "Preference forecasting proposal for career development service design from engineering educators’ perspective", v: "2022 IEEE International Conference on Industrial Engineering and Engineering Management (IEEM)", doi: "10.1109/IEEM55944.2022.9989954" },

    // 2021
    { y: 2021, type: "journal", a: "AF Zakaria, M Mohamed, MM Mohamad", t: "Efforts to improve knowledge and skills by adopting heutagogical approaches among technical and vocational educators", v: "Journal of Technical Education and Training, 13(3), 172–179", doi: "10.30880/jtet.2021.13.03.017", c: 4 },
    { y: 2021, type: "conference", a: "MFM Nasir, ARA Rahim, AF Zakaria, A Mukhtar", t: "Challenge and obstacles to promote sustainable remanufacturing: A cross case analysis", v: "2021 IEEE International Conference on Industrial Engineering and Engineering Management (IEEM)", doi: "10.1109/IEEM50564.2021.9672951", c: 2 },

    // 2020
    { y: 2020, type: "journal", a: "ME Ismail, S Hashim, AF Zakaria, A Ariffin, MH Amiruddin, MB Rahim, et al.", t: "Gender analysis of work readiness among vocational students: A case study", v: "Journal of Technical Education and Training, 12(1)", doi: "10.30880/jtet.2020.12.01.029", c: 23 },
    { y: 2020, type: "thesis", a: "AF Zakaria", t: "Customer focused optimal design skill training module from the informatics perspective", v: "PhD thesis, Universiti Tun Hussein Onn Malaysia" },

    // 2019
    { y: 2019, type: "journal", a: "ME Ismail, AF Zakaria, IM Ismail, H Othman, MA Samsudin, P Utami", t: "Design and development of augmented reality teaching kit: In TVET learning context", v: "International Journal of Engineering and Technology, 8(1.1), 129–134", c: 22 },
    { y: 2019, type: "journal", a: "NM Othman, AF Zaime, CS Lai, A Hasan, S Md Said, AF Zakaria, MF Lee", t: "The impact of environmental policies that influence job market", v: "International Journal of Recent Technology and Engineering, 8(4)", c: 5 },

    // 2013–2017
    { y: 2017, type: "conference", a: "AF Zakaria, SCJ Lim", t: "Design and development of a training module for data-driven product-service design", v: "2017 IEEE International Conference on Industrial Engineering and Engineering Management (IEEM)", doi: "10.1109/IEEM.2017.8290072", c: 11 },
    { y: 2017, type: "journal", a: "SCJ Lim, AF Zakaria", t: "An instructional approach for product features and customer preference identification using product reviews", v: "Engineering & Technology Research, 1(1), 16–21" },
    { y: 2016, type: "conference", a: "AF Zakaria, SCJ Lim", t: "A training and development skills to support product-service design from informatics perspective", v: "2016 IEEE International Conference on Industrial Engineering and Engineering Management (IEEM)", doi: "10.1109/IEEM.2016.7797917", c: 6 },
    { y: 2016, type: "conference", a: "AF Zakaria, SCJ Lim", t: "Matching rule discovery using classification for product-service design", v: "IEA/AIE 2016, Lecture Notes in Computer Science, Springer", doi: "10.1007/978-3-319-42007-3_4", c: 1 },
    { y: 2015, type: "conference", a: "SCJ Lim, AF Zakaria", t: "A collaborative tagging system design framework for supporting affective design", v: "2015 IEEE International Conference on Industrial Engineering and Engineering Management (IEEM)", doi: "10.1109/IEEM.2015.7385677", c: 4 },
    { y: 2014, type: "conference", a: "AF Zakaria, SCJ Lim", t: "A preliminary survey on modeling customer requirements from product reviews under preference uncertainty", v: "2014 IEEE International Conference on Industrial Engineering and Engineering Management (IEEM)", doi: "10.1109/IEEM.2014.7058808", c: 4 },
    { y: 2013, type: "conference", a: "AF Zakaria, SCJ Lim", t: "An instructional approach for product features and customer preference identification using product reviews", v: "Proc. National Forum and Exhibition on Engineering Design, 1–6", c: 1 }
  ],

  /* role: Leader | Member | Consultant. amount: string or "" when not stated. */
  grants: [
    { y: 2026, role: "Consultant", amount: "RM 399,735", title: "Kajian Impak dan Hala Tuju Kolej Komuniti sebagai Hab Pembangunan Komuniti Mapan dan Inklusif", funder: "Kementerian Pendidikan Tinggi" },
    { y: 2026, role: "Consultant", amount: "RM 399,526", title: "Kajian Kebolehlaksanaan Peluasan Pensijilan Berasaskan Kompetensi (Tahap 6 hingga 8) di bawah Sistem Persijilan Kemahiran Malaysia (SPKM)", funder: "Kementerian Sumber Manusia" },
    { y: 2026, role: "Leader", amount: "RM 18,000", title: "‘Tech Titans Arena’ — Designing Sustainable Makerspace Activities for Long Term Engagement, Effective Resource Utilization, and Continuous Innovation", funder: "Perbadanan Melaka · KK-2026-11" },
    { y: 2025, role: "Member", amount: "RM 349,918", title: "Kajian Keberkesanan Pintar TVET: Adaptasi Pendekatan Inovatif Finland dalam Reformasi Pengajaran TVET Malaysia", funder: "The Centre for Instructor and Advanced Skill Training (CIAST)" },
    { y: 2025, role: "Member", amount: "RM 40,000", title: "Pelancongan Lestari Mersing: Pemerkasaan Belia Melalui Inovasi Komuniti", funder: "Mersing Tourism Association (MTA) · KK-2025-027" },
    { y: 2024, role: "Leader", amount: "RM 70,000", title: "A Skill Acquisition Periodisation Framework for Drone Soccer Performance", funder: "Geran Universiti Penyelidikan (GUP) · GUP-2024-114" },
    { y: 2024, role: "Leader", amount: "RM 30,000", title: "Technical Training as a Lever for Socio-Economic Improvement Among Refugees: A Crisis Management Perspective", funder: "Dana Padanan Kolaborasi – Geran Pembiayaan Sepadan · DPK-GPS-JORDAN-2024-010" },
    { y: 2024, role: "Leader", amount: "RM 19,400", title: "Smallholders and Community Response to Best-Worst Scenario on Palm Oil Industry", funder: "Geran Kursi Endowmen MPOB-UKM · MPOB-UKM-2024-006" },
    { y: 2024, role: "Consultant", amount: "RM 156,750", title: "Strategi Peranan Perkongsian Awam-Swasta (PPP) dalam Kelestarian Pendanaan Institusi TVET di Malaysia", funder: "Kajian Jangka Pendek, Kementerian Ekonomi" },
    { y: 2023, role: "Consultant", amount: "RM 399,526", title: "Kajian Pembiayaan Berasaskan Prestasi", funder: "Kementerian Pendidikan Tinggi" },
    { y: 2023, role: "Member", amount: "RM 102,750", title: "Entrepreneurial Mindset Module Development in Creating Entrepreneurs Among Malaysian Children", funder: "EDESS Education Development and Solutions Specialist Sdn. Bhd." },
    { y: 2022, role: "Leader", amount: "RM 28,500", title: "Preference of Career Development Service Design Among Engineering Educators’ Perspective", funder: "Geran Galakan Penyelidik Muda (GGPM)" },
    { y: 2022, role: "Leader", amount: "RM 5,000", title: "Design Best Product Deals: A Skill Training in Engineering Education", funder: "Dana Penerbitan Buku (DPB)" },
    { y: 2022, role: "Consultant", amount: "", title: "Kajian Cabaran dan Impak Persijilan Profesional Industri dan Antarabangsa di Malaysia", funder: "Ministry of Human Resources, Malaysia" },
    { y: 2022, role: "Member", amount: "RM 20,000", title: "The Service Quality Assessment in the Hospital University Using HEALTHQUAL and SERVQUAL Model", funder: "Dana Penyelidikan FPEND" }
  ],

  courses: [
    { code: "KKKF 8033", name: "Research Methodology for Social Science", level: "Postgraduate", when: "2022 – present" },
    { code: "KKKF 6033", name: "Research Methodology for Science", level: "Postgraduate", when: "2022 – present" },
    { code: "KKKF 6113", name: "Engineering Didactics", level: "Postgraduate", when: "2022 – present" },
    { code: "KKKQ 2023", name: "Engineering Statistics and Machine Learning", level: "Undergraduate", when: "2022 – present" },
    { code: "KKKQ 2123", name: "Engineering Mathematics III (Differential Equations)", level: "Undergraduate", when: "2023 – present" },
    { code: "MCKK56091", name: "Engineering Statistics", level: "Micro-credential · UKMShape", when: "2026" },
    { code: "EPPM 2123", name: "Business Information System", level: "Undergraduate · UKMShape", when: "2025" }
  ],

  service: [
    { y: 2026, role: "Member", what: "TVET 2.0 Working Committee, National TVET Council", where: "Prime Minister’s Department" },
    { y: 2026, role: "Coordinator", what: "2026 Malaysia TVET Rating", where: "Ministry of Human Resources" },
    { y: 2025, role: "Speaker", what: "Design Thinking for College Community Course", where: "16–18 June 2025" },
    { y: 2024, role: "Jury", what: "Program Innovation Competition (INNOCOMP) 2024", where: "Kolej Komuniti Kuala Langat" },
    { y: 2024, role: "Jury", what: "2nd Borneo International Innovation and Invention Competition", where: "" },
    { y: 2024, role: "Jury", what: "Kongres dan Pertandingan Inovasi Pengajaran dan Pembelajaran (kNovasi)", where: "" },
    { y: 2023, role: "Jury", what: "Program SULAM-PGB Berkarya 2023", where: "Fakulti Teknologi Kejuruteraan, Universiti Tun Hussein Onn Malaysia" },
    { y: 2023, role: "Jury", what: "Ekspo Rekacipta UniMAP 2023 (EREKA 2023)", where: "Universiti Malaysia Perlis" },
    { y: 2023, role: "Speaker", what: "Kursus Method and Approaches in Teaching, Kolej Komuniti Tawau", where: "Jabatan Pendidikan Politeknik dan Kolej Komuniti (JPPKK)" },
    { y: 2023, role: "Speaker", what: "Kursus Merekabentuk Perancangan TVET, Politeknik Ungku Omar", where: "JPPKK" },
    { y: 2023, role: "Speaker", what: "Kursus Change Management Model, Politeknik Sultan Mizan", where: "JPPKK" },
    { y: 2023, role: "Speaker", what: "Kursus Change Management Model, Politeknik Nilai", where: "JPPKK" },
    { y: 2023, role: "Speaker", what: "Program Webinar Celik Penyelidikan, Kolej Komuniti Kuala Langat dan Kolej Komuniti Kuala Pilah", where: "JPPKK" },
    { y: 2023, role: "Mentor", what: "Bengkel Research Clinic UKM–KKKL 2023", where: "JPPKK" }
  ]
};
