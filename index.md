---
layout: home
permalink: /
---

<style>
/* 전체 폭 조정(원하는 경우) */
.page .page-content { max-width: 900px; }

/* 섹션 타이틀 */
.cv-section-title {
  margin-top: 2.2rem;
  font-weight: 700;
  letter-spacing: .02em;
  font-size: 1.7rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: .4rem;
  text-transform: uppercase;
}

/* 타임라인 그리드: 왼쪽 날짜, 오른쪽 내용 */
.cv-grid {
  display: grid;
  grid-template-columns: 140px 1fr;     /* 왼쪽 고정폭, 오른쪽 유동 */
  gap: .6rem 1.4rem;                    /* 행/열 간격 */
  align-items: stretch;                 /* 같은 행의 높이 맞춤 */
  margin-top: .8rem;
}

/* 왼쪽 날짜 셀 */
.cv-when {
  color: var(--text-muted);
  white-space: nowrap;                  /* 줄바꿈 방지 */
}

/* 오른쪽 본문 셀 */
.cv-item {
  line-height: 1.6;
}

/* 기관/직함 강조 */
.cv-org { font-weight: 700; }
.cv-note { font-style: italic; }

/* 도시를 오른쪽 끝에 붙이고 싶을 때 */
.cv-right {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

/* 임의로 줄바꿈 막고 싶을 때 쓰는 유틸 */
.nowrap { white-space: nowrap; }

.mobile-profile {
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr);
  gap: 1rem;
  align-items: center;
  margin: -1rem 0 1.1rem;
  padding: .85rem;
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  background: var(--card-bg, var(--main-bg));
}

.mobile-profile-photo {
  width: 120px;
  height: 120px;
  margin: 0;
  object-fit: cover;
  border: 2px solid var(--border-color);
  border-radius: 50%;
}

.mobile-profile-name {
  margin: 0 0 .15rem;
  font-size: 1.5rem;
  line-height: 1.2;
}

.mobile-profile-role,
.mobile-profile-focus {
  margin: 0;
  line-height: 1.4;
}

.mobile-profile-role {
  font-size: .98rem;
}

.mobile-profile-focus {
  margin-top: .2rem;
  color: var(--text-muted);
  font-size: .9rem;
}

.mobile-profile-summary {
  grid-column: 1 / -1;
  margin: 0;
  color: var(--text-muted);
  font-size: .93rem;
  line-height: 1.55;
}

/* Mobile: stack dates above their content instead of squeezing both columns. */
@media (max-width: 768px) {
  .page .page-content {
    max-width: 100%;
    font-size: 1rem;
    line-height: 1.7;
  }

  .cv-section-title {
    margin-top: 2rem;
    font-size: 1.35rem;
  }

  .mobile-profile {
    display: grid;
    grid-template-columns: 120px minmax(0, 1fr);
    gap: 1rem;
    align-items: center;
    margin: -1.35rem 0 1.1rem;
    padding: .85rem;
    border: 1px solid var(--border-color);
    border-radius: 1rem;
    background: var(--card-bg, var(--main-bg));
  }

  .mobile-profile-photo {
    width: 120px;
    height: 120px;
    margin: 0;
    object-fit: cover;
    border: 2px solid var(--border-color);
    border-radius: 50%;
  }

  .mobile-profile-name {
    margin: 0 0 .15rem;
    font-size: 1.35rem;
    line-height: 1.2;
  }

  .mobile-profile-role {
    margin: 0;
    line-height: 1.4;
  }

  .mobile-profile-role {
    font-size: .9rem;
  }

  .mobile-profile-summary {
    grid-column: 1 / -1;
    margin: 0;
    color: var(--text-muted);
    font-size: .86rem;
    line-height: 1.55;
  }

  .cv-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: .25rem;
  }

  .cv-when {
    margin-top: .85rem;
    font-size: .9rem;
    font-weight: 600;
    white-space: normal;
  }

  .cv-item {
    min-width: 0;
    margin-bottom: .65rem;
  }

  .cv-right {
    flex-wrap: wrap;
    gap: .15rem .75rem;
  }

  .page-content ol {
    padding-left: 1.35rem;
  }

  .page-content li + li {
    margin-top: .65rem;
  }
}
</style>

<section class="mobile-profile" aria-label="Profile">
  <img class="mobile-profile-photo" src="{{ '/assets/img/me.jpg' | relative_url }}" alt="Dongha Choi">
  <div>
    <h2 class="mobile-profile-name">Dongha Choi</h2>
    <p class="mobile-profile-role">Ph.D. Candidate at Yonsei University</p>
    <p class="mobile-profile-focus"><a href="https://cbchae.yonsei.ac.kr" target="_blank" rel="noopener noreferrer">Intelligence Networking Lab.</a></p>
  </div>
  <p class="mobile-profile-summary">My research interests include <strong>AI-RAN</strong>, <strong>semantic communications</strong>, and <strong>real-world wireless prototyping</strong>, and I also love solving problems across social domains through practical technological solutions.</p>
  <div class="resource-links mobile-profile-links">
    <a href="{{ '/assets/pdf/Dongha_Choi_CV.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">CV</a>
  </div>
</section>

<div class="cv-section-title" id="projects">Selected Projects</div>
{% include project-cards.html limit=3 %}
<p class="projects-more"><a href="{{ '/projects/' | relative_url }}">View all projects <i class="fas fa-arrow-right" aria-hidden="true"></i></a></p>

<div class="cv-section-title" id="publications">Selected Publications</div>
{% include publications-list.html selected=true limit=3 %}
<p class="projects-more"><a href="{{ '/publications/' | relative_url }}">View all publications <i class="fas fa-arrow-right" aria-hidden="true"></i></a></p>

<div class="cv-section-title" id="education">Education</div>
<div class="cv-grid">
  <div class="cv-when nowrap">2023&nbsp;&mdash;&nbsp;Present</div>
  <div class="cv-item">
    <div class="cv-right">
      <span class="cv-org">Yonsei University</span>
      <span>Seoul, Korea</span>
    </div>
    Ph.D. Candidate <span class="cv-note">(Advisor: Prof. Chan-Byoung Chae)</span>
  </div>

  <div class="cv-when">2020&nbsp;&mdash;&nbsp;2022</div>
  <div class="cv-item">
    <div class="cv-right">
      <span class="cv-org">Yonsei University</span>
      <span>Seoul, Korea</span>
    </div>
    <!-- B.E. Integrated Technology <span class="cv-note">(GPA: 4.14/4.50, Early grad.)</span> -->
    B.E. Integrated Technology <span class="cv-note">(Early Graduation)</span>
  </div>
</div>

<div class="cv-section-title" id="demonstrations">System Demonstrations</div>
<div class="cv-grid">
  <div class="cv-when">Dec. 8&ndash;12, 2025</div>
  <div class="cv-item">
    Exhibitor, <span class="cv-org">IEEE GLOBECOM 2025 (Taipei, Taiwan)</span><br>
    <span class="cv-note">Demonstrated “Secure Semantic Communications with Steganography”.</span>
    <div class="resource-links">
      <a href="{{ '/demonstrations/ieee-globecom-2025/' | relative_url }}">Details</a>
      <a href="https://www.aitimes.kr/news/articleView.html?idxno=37696" target="_blank" rel="noopener noreferrer">News</a>
    </div>
  </div>
  <div class="cv-when">Jun. 15&ndash;20, 2025</div>
  <div class="cv-item">
    Exhibitor, <span class="cv-org">IEEE IMS 2025 (San Francisco, USA)</span><br>
    <span class="cv-note">Demonstrated “Real-Time Semantic Communications with Transparent AR Glasses”.</span>
    <div class="resource-links">
      <a href="{{ '/demonstrations/ieee-ims-2025/' | relative_url }}">Details</a>
    </div>
  </div>
  <div class="cv-when">May 14&ndash;15, 2025</div>
  <div class="cv-item">
    Exhibitor, <span class="cv-org">IEEE 6G Summit Dresden 2025 (Dresden, Germany)</span><br>
    <span class="cv-note">Demonstrated “Real-Time Semantic Communications with Transparent AR Glasses”.</span>
    <div class="resource-links">
      <a href="{{ '/demonstrations/ieee-6g-summit-dresden-2025/' | relative_url }}">Details</a>
      <a href="https://www.hani.co.kr/arti/economy/biznews/1198965.html" target="_blank" rel="noopener noreferrer">News</a>
    </div>
  </div>
</div>

<div class="cv-section-title" id="awards">Awards and Honors</div>
<div class="cv-grid">
  <div class="cv-when">Feb. 2025</div>
  <div class="cv-item">
    <span class="cv-org">Honor Prize</span><br>
    <span class="cv-note">In the 31st Samsung Humantech Paper Award (Co-recipient: Hanju Yoo)</span>
    <div class="resource-links">
      <a href="{{ '/awards/samsung-humantech-2025/' | relative_url }}">Details</a>
    </div>
  </div>
  
  <div class="cv-when">Mar. 2022</div>
  <div class="cv-item">
    <span class="cv-org">Full Scholarship for Undergraduate</span><br>
    <span class="cv-note">Issued by Kwanjeong Educational Foundation</span>
  </div>

  <div class="cv-when">Aug. 2021</div>
  <div class="cv-item">
    <span class="cv-org">Highest Honors</span><br>
    <span class="cv-note">&lt;1% in college of engineering</span>
  </div>

  <div class="cv-when">Feb. 2020</div>
  <div class="cv-item">
    <span class="cv-org">Best Dreamer Award</span><br>
    <span class="cv-note">HS Valedictorian</span>
  </div>

</div>

<div class="cv-section-title" id="experiences">Experience</div>
<div class="cv-grid">
  <div class="cv-when">Dec. 2024&nbsp;&mdash;&nbsp;Jan. 2025</div>
  <div class="cv-item">
    <span class="cv-org">Visiting Researcher</span>, <br> 
    Singapore University of Technology and Design (SUTD), Singapore<br>
    <span class="cv-note">Hosted by Prof. Jihong Park. Conducted collaborative research on semantic communications.</span>
  </div>

  <div class="cv-when">2022&nbsp;&mdash;&nbsp;2025</div>
  <div class="cv-item">
    <span class="cv-org">Teaching Assistant</span>, 
    <br> Computational Thinking and SW Programming, Yonsei University<br>
    Engineering Information Processing, Yonsei University<br>
    Understanding the World with Data, Yonsei University<br>
    <span class="cv-note">Led weekly 4-hour Python, C, SQL lectures and prepared course materials and exams.</span>
  </div>
</div>

<div class="cv-section-title" id="professional-service">Professional Service</div>
<div class="cv-grid">
  <div class="cv-when">2026&nbsp;&mdash;&nbsp;Present</div>
  <div class="cv-item">
    <span class="cv-org">Reviewer</span><br>
    <span class="cv-note">IEEE Journal of Selected Topics in Signal Processing (1)</span>
  </div>
</div>

<div class="cv-section-title" id="skills">Skills</div>
<div class="cv-grid">
  <div class="cv-when"><strong>Languages</strong></div>
  <div class="cv-item">
    Korean (Native), English (Fluent), Chinese (Intermediate, HSK IV 280)
  </div>

  <div class="cv-when"><strong>Foundational<br>Expertise in EECS</strong></div>
  <div class="cv-item">
    Communications Theory, Information Theory, Machine Learning (Deep Learning and Reinforcement Learning), Data Management, Digital System Design, and Computer Systems Programming
  </div>

  <div class="cv-when"><strong>Programming</strong></div>
  <div class="cv-item">
    Python, TensorFlow, PyTorch, MATLAB, C (Fluent),<br>JavaScript, HTML (Intermediate)
  </div>
</div>

<!-- 예시: 포스트 한 개로 연결 버튼 -->
<!-- <p style="margin-top:2rem;">
  <a class="btn" href='{{ "/2025/10/30/bridging-neural-networks-and-wireless-systems-with-mimo-ofdm-semantic-communications/" | relative_url }}'>
    Read: Bridging Neural Networks and Wireless Systems with MIMO-OFDM Semantic Communications
  </a>
</p> -->
