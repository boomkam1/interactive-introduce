// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 모니터 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
const btnMonitor = document.getElementById('btn-monitor');
const deskWrapper = document.querySelector('.desk-wrapper');
const desktopOs = document.getElementById('desktop-os');
const btnBack = document.getElementById('btn-back');

// 모니터 클릭 줌인
btnMonitor.addEventListener('click', () => {
    deskWrapper.classList.add('zoomed');
    setTimeout(() => {
        desktopOs.classList.add('active');
    }, 600);
});

// 줌아웃
btnBack.addEventListener('click', () => {
    desktopOs.classList.remove('active');
    setTimeout(() => {
        deskWrapper.classList.remove('zoomed');
    }, 400);
});


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 모니터 외 요소 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
const btnItem = document.getElementById('btn-item');
const itemModal = document.getElementById('item-modal');
const closeItem = document.getElementById('close-item');

// 모달 띄우기
btnItem.addEventListener('click', () => {
    itemModal.classList.add('show');
});

// 닫기 버튼
closeItem.addEventListener('click', () => {
    itemModal.classList.remove('show');
});

// 주변 기기
const btnDevice = document.getElementById('btn-device');
const deviceModal = document.getElementById('device-modal');
const closeDevice = document.getElementById('close-device');

btnDevice.addEventListener('click', () => {
    deviceModal.classList.add('show');
});

closeDevice.addEventListener('click', () => {
    deviceModal.classList.remove('show');
});


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 바탕화면 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
const osHotspots = document.querySelectorAll('.os-hotspot');
const osWindow = document.getElementById('os-window');
const windowTitle = document.getElementById('window-title');
const windowBody = document.getElementById('window-body');
const windowClose = document.getElementById('window-close');

// 각 파일의 내용
const osContents = {
    trash: {
        title: '🗑️ 휴지통',
        html: `
        <h3>임베드 코드를 활용하는 계획도 있었지만 제외했습니다. 아래는 그 예시입니다.</h3>
        <iframe src="https://cdn.bubbleshooter.net/games/wordle/" width="770" height="610" style="border:none;"></iframe>
        `
    },
    work: {
        title: '📁 작업 목록',
        html: `
        <h3>제 작업물입니다.</h3>
        <a href="https://github.com/boomkam1" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; display: block;">
            <p style="margin-top: 10px;"><b>🧑‍💻 프로그래밍:</b> 전공입니다. 주 관심 분야는 네트워크, 데이터입니다.</p>
        </a>
        <a href="https://www.youtube.com/@boomkam1" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; display: block;">
            <img src="youtube.png" alt="유튜브" style="width: 30px; border-radius: 0; margin: 11px 10px 0 0; float: left;">
            <p><b>유튜브:</b> 취미로 게임 영상 등을 편집해서 올립니다.</p>
        </a>
        <a href="https://boomkam1.github.io/Baobab-Tree-University" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; display: block;">
            <img src="https://boomkam1.github.io/Baobab-Tree-University/logo1.jpg" alt="BTU" style="width: 30px; border-radius: 50%; margin: 5px 10px 0 0; float: left;">
            <p><b>바오밥나무대학교:</b> 대학교 컨셉의 친목 커뮤니티 프로젝트입니다. 🛠️공사 중입니다.🛠️</p>
        </a>
        <p>💡 다음에는 어떤 것을 해볼까요?</p>
        `
    },
    game: {
        title: '📁 게임',
        html: `
        <h3>내가 사랑했던 게임들</h3>
        <div class="game-cards-container">
            <div class="game-card">
                <img src="https://store-images.s-microsoft.com/image/apps.1998.14548245473193065.3d2dbc10-d879-4882-a2bb-cf42a6790f66.4d665574-275b-45ec-9674-3485cf253a8c?q=90&" alt="오버워치" class="game-img">
                <div class="game-info">
                    <h4>오버워치</h4>
                    <h6>(Overwatch)</h6>
                    <p>플레이타임: 3500+시간</p>
                </div>
            </div>
            <div class="game-card">
                <img src="https://store-images.s-microsoft.com/image/apps.61426.13827124301078315.8451c006-d969-493e-b6bd-27c25b136528.2a15909b-6732-4112-b4cc-0c651a88f0a6?q=90&" alt="gta" class="game-img">
                <div class="game-info">
                    <h4>GTA 5</h4>
                    <h6>(Grand Theft Auto 5)</h6>
                    <p>플레이타임: 800+시간</p>
                </div>
            </div>
            <div class="game-card">
                <img src="https://store-images.s-microsoft.com/image/apps.17255.71371076658790719.4cfe814e-e6c9-411d-9572-4cef7851d6d4.298c6f14-8b6b-4173-92f3-0b826a24a74f?q=90&" alt="에이펙스 레전드" class="game-img">
                <div class="game-info">
                    <h4>Apex 레전드</h4>
                    <h6>(Apex Legends)</h6>
                    <p>플레이타임: 400+시간</p>
                </div>
            </div>
            <div class="game-card">
                <img src="https://store-images.s-microsoft.com/image/apps.25322.14537704372270848.6ecb6038-5426-409a-8660-158d1eb64fb0.d230176a-d7a2-4696-ad23-ff53a6e004df?q=90&" alt="엘든 링" class="game-img">
                <div class="game-info">
                    <h4>엘든 링</h4>
                    <h6>(Elden Ring)</h6>
                    <p>플레이타임: 200+시간</p>
                </div>
            </div>
            <div class="game-card">
                <img src="https://store-images.s-microsoft.com/image/apps.24212.71827372323164480.6e97c7d2-899a-404f-8660-d622a7fc9162.daea9ed5-4921-45a6-a188-637bfab7176c?q=90&" alt="다크 소울" class="game-img">
                <div class="game-info">
                    <h4>다크 소울 3</h4>
                    <h6>(Dark Souls 3)</h6>
                    <p>플레이타임: 200+시간</p>
                </div>
            </div>
            <div class="game-card">
                <img src="https://store-images.s-microsoft.com/image/apps.10554.13533127236106585.24f640c5-379e-441f-9b67-18a97f9ab083.794c39c6-9410-42f1-bf5b-8b8beff8a8c3?q=90&" alt="마듀" class="game-img">
                <div class="game-info">
                    <h4>유희왕 마스터듀얼</h4>
                    <h6>(Yu-Gi-Oh! Master Duel)</h6>
                    <p>플레이타임: 200+시간</p>
                </div>
            </div>
            <div class="game-card">
                <img src="https://store-images.s-microsoft.com/image/apps.26142.69997608528322872.06dc9610-5c4e-484e-b028-58ad215e637a.b216af15-301f-4f23-83a3-69a59a87985b?q=90&" alt="마듀" class="game-img">
                <div class="game-info">
                    <h4>와치독 2</h4>
                    <h6>(Watch Dogs 2)</h6>
                    <p>플레이타임: 100+시간</p>
                </div>
            </div>
        `
    },
    folder: {
        title: '📁 새 폴더',
        html: `
        <p>이 폴더는 비어있습니다.</p>
        `
    },
    text: {
        title: '🗒️ 메모장',
        html: `
        <h3>자기소개를 겸하는 인터랙티브 웹 페이지를 만들어보았습니다.</h3>
        <p>처음 책상 사진은 실제로 제 책상을 직접 찍은 사진이고</p>
        <p>이 배경화면 또한 실제 제 데스크탑 배경화면입니다.</p>
        <p>독특한 것을 만들어보고 싶어서 해보았는데 재밌게 느껴졌으면 좋겠습니다.</p>
        `
    }
};

// 모든 바탕화면 아이콘에 클릭 이벤트 연결
osHotspots.forEach((btn) => {
    btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-type');
        const data = osContents[type];
        if (data) {
            windowTitle.textContent = data.title;
            windowBody.innerHTML = data.html;
            osWindow.classList.add('show');
        }
    });
});

// 닫기 버튼
windowClose.addEventListener('click', () => {
    osWindow.classList.remove('show');
});

// 책상 버튼으로도 닫히게
btnBack.addEventListener('click', () => {
    osWindow.classList.remove('show');
});