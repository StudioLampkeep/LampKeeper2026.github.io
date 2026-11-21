/**
 * Studio LampKeep Official Website Scripts v2.0
 * Jointly crafted by Art Director, UI/UX Specialist, & Creative Motion Specialist
 */

// Product Details Data for Modals
const APP_DATA = {
  poc: {
    title: 'Prince of Chaos',
    subtitle: '― 混沌迷宮と呪いの公子 ―',
    category: '本格3DダンジョンRPG × 紙芝居会話劇',
    tag: 'Android 8.0+ 専用',
    platform: 'Android 8.0+ 専用',
    price: '基本プレイ無料（広告消し 500円）',
    packageId: 'com.lampkeep.princeofchaos',
    distribution: 'Google Play クローズドテスト / 公開準備中',
    specs: [
      { label: '日本語正式名称', value: 'Prince of Chaos ― 混沌迷宮と呪いの公子 ―' },
      { label: 'プラットフォーム', value: 'Android 8.0+ 専用' },
      { label: '価格方針', value: '基本プレイ無料（広告消し 500円）' },
      { label: 'パッケージID', value: 'com.lampkeep.princeofchaos' },
      { label: 'ネットワーク', value: '完全オフライン動作（通信なし）' },
      { label: 'サウンド', value: '全32曲 完全オリジナル内包' },
      { label: '操作対応', value: 'タッチスライド見渡し / 十字キー / ゲームパッド' },
      { label: 'シナリオ規模', value: '全112場面 / 6大マルチエンディング' }
    ],
    description: `呪いの公子と呼ばれるリュカと、言葉を話す黒猫クロが、楔を集めて逆さ塔を目指すダークファンタジーRPG。
吹き出しによるテンポ良い紙芝居会話劇（全112場面、6つのマルチエンディング）と、一人称視点の重厚な地下迷宮探索が融合。
壁・床・戦闘背景が階層ごとに変化する地下10階＋深淵回廊、精鋭モンスター、武具の付加効果・ユニーク・組装備システム、連携技バトルなど、やりこみ要素が凝縮されています。
迷宮・名称・文章・絵・全32曲のオリジナルBGMはすべて独自制作。外部データやROMは一切不要で、完全オフラインで没入できます。`,
    features: [
      '吹き出しでテンポよく進む112場面の会話劇＆6つの結末（マルチエンディング）',
      '最大6人編成の隊列、技と気力、パートナーとの強力な連携技システム',
      '地下10階の踏破、その先に待ち受ける果てなき「深淵回廊」と精鋭魔獣',
      '武具の付加効果（Affixes）、ユニーク装備、セット効果、ナギの鍛冶屋での強化',
      '全32曲に及ぶ Studio LampKeep 完全オリジナル楽曲を内包',
      'タッチスライド見渡し・画面反転・Bluetooth/USBゲームパッド完全対応'
    ],
    gallery: [
      { src: 'assets/img/poc/hero.jpg', caption: 'キービジュアル：深淵の塔と呪いの公子リュカ' },
      { src: 'assets/img/poc/01_title.jpg', caption: 'タイトル画面：Prince of Chaos ― 混沌迷宮と呪いの公子 ―' },
      { src: 'assets/img/poc/story_prologue.jpg', caption: '紙芝居会話劇：序幕・呪いと運命の出会い（全112場面）' },
      { src: 'assets/img/poc/05_maze.jpg', caption: '地下迷宮探索：一人称視点3Dダンジョン＆スライド見渡し' },
      { src: 'assets/img/poc/boss.jpg', caption: '魔獣遭遇：深淵回廊の強敵ボス＆精鋭魔獣' },
      { src: 'assets/img/poc/07_battle.jpg', caption: 'コマンドバトル：隊列・気力・強力な連携技' },
      { src: 'assets/img/poc/04_status.jpg', caption: 'パーティ・ステータス管理・武具付加効果' },
      { src: 'assets/img/poc/14_inn.jpg', caption: '拠点ナギ：灯火の酒場・鍛冶屋・祈りの宮' }
    ],
    links: [
      { text: 'Google Play で入手（クローズドテスト）', url: 'https://play.google.com/apps/testing/com.lampkeep.princeofchaos', isExternal: true },
      { text: 'Prince of Chaos 単体紹介サイト', url: 'https://studiolampkeep.github.io/prince-of-chaos/', isExternal: true, isSecondary: true },
      { text: 'プライバシーポリシー', url: 'https://studiolampkeep.github.io/prince-of-chaos-privacy/', isExternal: true, isSecondary: true }
    ]
  },
  blockdrop: {
    title: 'LampDrop：混沌迷宮の蒼き灯火',
    subtitle: 'LampDrop: Chaos Labyrinth ― 暗闇を切り裂く、蒼き刃と魔導ランタンの共鳴',
    category: '本格アーケード物理 × ダークファンタジー迷宮RPG',
    tag: 'Android 7.0+ / Google Play 公開中',
    platform: 'Android 7.0+ (Google Play 公開中)',
    price: '基本プレイ無料（買い切りプレミアムパス ¥600）',
    packageId: 'com.lampkeep.blockdrop1988',
    distribution: 'Google Play ストア公開中',
    specs: [
      { label: 'プラットフォーム', value: 'Android 7.0+（Bluetooth/USBゲームパッド対応）' },
      { label: '最新バージョン', value: 'v1.0.72 (Build 73)' },
      { label: '操作性', value: '上下2段の独立左右回転・NEXT ⇄ 2NDタップ入替・壁床キック・回転入れ' },
      { label: '難易度設計', value: '自動最適化『魔導炉（魔炎度 0.0–9.0）』＆ 全6章体験型チュートリアル道場' },
      { label: 'プレイフィールド', value: '90%透過ガラス 12×20 ワイド戦場（ランタン共鳴＆聖十字・大浄化）' },
      { label: 'カード＆戦闘', value: '全46枚フルアートカード（15大ボス＋20種モブ波状戦＋味方11）' },
      { label: 'エンドゲーム', value: 'EX深淵領域（LV60–99 / 4深度・5大深淵法則・Ω OMEGA称号）' },
      { label: '料金体系', value: 'LV0–30無料 / 買い切り¥600（LV31–60+・EX深淵・広告永久削除／LV30×30回でLV31+無料解放）' },
      { label: '対応言語', value: '全9言語（日・英・中・韓・仏・葡・泰・西・独）＆ 日英6本ボーカルMV' },
      { label: 'パッケージID', value: 'com.lampkeep.blockdrop1988' }
    ],
    description: `一列消せば、敵を両断。ブロックを積むたび、心拍数が跳ね上がる！
60fps本格アーケードパズルの操作感に、ダークファンタジー迷宮RPGカードバトルが完全融合した『LampDrop（ランプドロップ）』。
90%透過ガラスの12×20戦場で同色ランプを繋ぐ【ランタン共鳴】、装甲半減の【秘剣・回転入れ（Arcane Twist）】、ボス必殺詠唱を打ち砕く【テレグラフ破り】を駆使し、20種の迷宮モブ波状戦と15体の深淵守護者、さらにクリア後のEX深淵（LV60–99）を制覇せよ！
腕前に応じて自動最適化する『魔導炉（0.0–9.0）』、全6章体験型チュートリアル道場、日英6本ボーカルMV＆12シーンシアターまで完全収録。`,
    features: [
      '快適パズル革命：上下2段の独立左右回転・NEXT ⇄ 2NDタップ入替・誤爆防止ハードドロップ・壁床キック完全対応',
      '戦術カード戦闘：ランタン共鳴（5個連結属性魔法）・秘剣回転入れ（DEF半減）・ボス必殺テレグラフ破り（反撃＆回復）',
      '全46枚フルアートカード：20種前衛モブ波状戦・2倍HP＆15種固有登場演出ボス・進化ルーカス・歌姫ウタ手動聖歌・精霊クロ日英ボイス救援',
      'エンドゲーム『EX深淵（LV60–99）』：5層ごとに戦況が変わる5大深淵法則と覚醒ボスラッシュでΩ OMEGA称号に挑戦',
      '自動難易度『魔導炉（0.0–9.0）』＆ 全6章体験型道場：手動難易度選択不要で初心者から上級者まで最適な熱狂を提供',
      '日英6本ボーカルMV＆12シーンシアター・全15体ボス魔物図鑑（討伐時DEFEATED金箔印）・世界ランキング対応',
      '明朗課金設計：LV0–30＆CHAOS BURST＆デイリー無料。買い切りプレミアムパス（¥600）で全要素＆全広告永久削除（LV30到達30回でLV31+無料解放も対応）'
    ],
    gallery: [
      { src: 'assets/img/blockdrop/feature_graphic.png', caption: '公式グラフィック：LampDrop 混沌迷宮の蒼き灯火（Plan A 新アイコン）' },
      { src: 'assets/img/blockdrop/promo_01_battle.png', caption: '12×20透過盤面×迷宮RPGカードバトル（上下2段左右回転＆NEXT入替）' },
      { src: 'assets/img/blockdrop/promo_02_slash.png', caption: '4列【聖十字・破呪】× 必殺ブレイク × 秘剣回転入れ' },
      { src: 'assets/img/blockdrop/promo_03_bestiary.png', caption: '全46枚フルアートカード・15大ボス図鑑 ＆ 精霊クロ緊急救援' },
      { src: 'assets/img/blockdrop/promo_04_mv.png', caption: '日英6本ボーカル主題歌MV ＆ 12シーンBGMシアター' },
      { src: 'assets/img/blockdrop/promo_05_hybrid.png', caption: '多彩なゲームモード・EX深淵（LV60–99）＆ 物理ゲームパッド対応' }
    ],
    links: [
      { text: 'Google Play ストアで入手', url: 'https://play.google.com/store/apps/details?id=com.lampkeep.blockdrop1988', isExternal: true },
      { text: 'LampDrop 特設公式サイト', url: 'lampdrop/index.html', isExternal: false },
      { text: '公式PVを視聴 (YouTube)', url: 'https://www.youtube.com/watch?v=hOTzv1ojSjA', isExternal: true, isSecondary: true },
      { text: 'プライバシーポリシー', url: 'lampdrop-privacy.html', isExternal: false, isSecondary: true }
    ]
  },
  novelreader: {
    title: '青空文庫＆文書AI朗読',
    subtitle: 'Aozora & Document AI Reader ― 複数声優で聴く小説・PDF',
    category: 'AI複数声優オート配役 × 古典現代語超訳 × 7ヶ国語AI翻訳プレイヤー',
    tag: 'Android 8.0+ / Google Play 公開中',
    platform: 'Android 8.0+ / Windows 10/11 (Web PWA)',
    price: '基本無料（広告非表示・AI翻訳・BG無制限プレミアム対応）',
    packageId: 'com.lampkeep.novel.aireader',
    distribution: 'Google Play ストア公開中',
    specs: [
      { label: 'プラットフォーム', value: 'Android 8.0+ / Windows PWA' },
      { label: '最新バージョン', value: 'v1.8.0 (Build 51)' },
      { label: '料金体系', value: '基本無料 / プレミアム買い切りアップグレード' },
      { label: '音声合成エンジン', value: 'VOICEVOX Native（9キャラ内蔵）× OS標準TTS' },
      { label: '収録・対応形式', value: '青空文庫18,000作（136名作初期収録）・PDF / Word / TXT / Markdown / AI OCR' },
      { label: '超訳・多言語翻訳', value: '古典の現代語超訳（2段対訳）＆ 主要7ヶ国語（日・英・中・韓・西・仏・葡）翻訳朗読' },
      { label: 'バックグラウンド', value: '画面OFF連続再生 (FGS) ＆ 大型ボタン「カーモード」・Bluetooth連携' },
      { label: '読書快適機能', value: '4大テーマ（紙白/セピア/ダーク/OLED）・縦書き・環境音BGMミキサー・睡眠タイマー' },
      { label: 'パッケージID', value: 'com.lampkeep.novel.aireader' }
    ],
    description: `青空文庫の日本文学名作18,000作品（136名作初期収録）やお手持ちの所持文書（PDF・Word・TXT・Markdown・スキャンPDF AI OCR）を、AIがリアルタイムに文脈・感情解析！
ナレーションと登場人物のセリフを自動判別し、アプリ内蔵のVOICEVOX 9キャラクター（四国めたん・ずんだもん・春日部つむぎ・雨晴はう・玄野武宏・剣崎雌雄・青山龍星・もち子(cv 明日葉よもぎ)・小夜/SAYO）やOS標準TTSがキャラクターごとに声分けしてドラマCDのように朗読する次世代AIオーディオブックアプリです。
古典がスラスラわかる「現代語超訳」＆「7ヶ国語AI翻訳朗読」、4大テーマ＆縦書き、環境音BGMミキサー＆睡眠タイマー、運転用の超大型ボタン「カーモード」、アカウント不要＆端末内ローカル保存で安心して楽しめます。`,
    features: [
      'AI複数声優オート配役：文脈・口調からナレーションと登場人物を自動判別し、キャラ別に最適キャスティング',
      'VOICEVOX 9キャラ完全内包 × OS標準TTS：声色・ピッチ・話速・間合いを1タップ試聴しながら自在に調整',
      '古典の「現代語超訳」＆「7ヶ国語AI翻訳朗読」：2段対訳表示と英・中・韓・西・仏・葡のネイティブTTS読み上げ対応',
      '青空文庫18,000作品検索 ＆ 136名作初期収録：日替わり今日の一冊・5分短編・人気順検索で即再生',
      'PDF / Word / TXT / Markdown 流し込み ＆ AI OCR：見出し自動章分割とスキャンPDF文字起こし（任意Gemini API連携）',
      '画面OFFバックグラウンド再生 ＆ 大型ボタン「カーモード」：Bluetoothイヤホン・車載ステアリングスイッチ完全対応',
      '4大高コントラストテーマ（紙白・セピア・ダーク・OLED漆黒）・縦書き/横書き切替・環境音BGMミキサー（雨音・焚き火・森・カフェ）・睡眠タイマー・体験型ガイド搭載'
    ],
    gallery: [
      { src: 'assets/img/novelreader/feature_graphic.png', caption: '公式グラフィック：名作文学も手持ちPDFも、耳で聴くドラマ体験へ。' },
      { src: 'assets/img/novelreader/promo_01.png', caption: '① 複数声優オート配役：ナレーションとセリフを自動判別し声分け朗読' },
      { src: 'assets/img/novelreader/promo_02.png', caption: '② 青空文庫18,000作品＆136名作初期収録：日替わり今日の一冊・5分短編' },
      { src: 'assets/img/novelreader/promo_03.png', caption: '③ VOICEVOX 9キャラ完全内包：キャラ別の声・ピッチ・話速を自在調整' },
      { src: 'assets/img/novelreader/promo_04.png', caption: '④ 古典の現代語超訳＆7ヶ国語AI翻訳：2段対訳表示＆ネイティブ朗読' },
      { src: 'assets/img/novelreader/promo_05.png', caption: '⑤ 画面OFF連続再生＆大型カーモード：運転中や移動中も安全操作' },
      { src: 'assets/img/novelreader/promo_06.png', caption: '⑥ PDF/Word/TXT/MD流し込み＆AI OCR：手持ち資料をオーディオブック化' },
      { src: 'assets/img/novelreader/promo_07.png', caption: '⑦ 4大読書テーマ・縦書き・環境音BGMミキサー・おやすみタイマー' }
    ],
    links: [
      { text: 'Google Play ストアで入手', url: 'https://play.google.com/store/apps/details?id=com.lampkeep.novel.aireader', isExternal: true },
      { text: '青空文庫＆文書AI朗読 特設公式サイト', url: 'novel-ai-reader/index.html', isExternal: false },
      { text: '公式PVを視聴 (YouTube)', url: 'https://www.youtube.com/watch?v=s_8apjh84RY', isExternal: true, isSecondary: true },
      { text: '使い方解説ガイド動画 (YouTube)', url: 'https://www.youtube.com/watch?v=RDAYXnzfNzM', isExternal: true, isSecondary: true },
      { text: '公式取扱説明書 (PDF 10P)', url: 'novel-ai-reader/小説AI朗読_全機能取扱説明書_完全マニュアル.pdf', isExternal: false, isSecondary: true },
      { text: 'プライバシーポリシー', url: 'novel-ai-reader/privacy.html', isExternal: false, isSecondary: true }
    ]
  }
};

// Global State
let currentModalApp = null;
let currentModalGalleryIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  // 1. Creative Motion: Canvas Particles
  new LanternParticleEngine('lantern-canvas');

  // 2. Creative Motion: Mouse-tracking Glow & 3D Tilt
  initCardTiltAndGlow();

  // 3. UI/UX: Navbar & Mobile Drawer
  initNavbar();

  // 4. UI/UX: Works Filter
  initFilter();

  // 5. UI/UX: Card Thumbnails Switcher
  initThumbnailSwitching();

  // 6. UI/UX: Rich Modal Lightbox
  initModals();

  // 7. UI/UX: Copy Buttons
  initCopyButtons();

  // 8. UI/UX: Bottom Bar Scroll Spy
  initScrollSpy();
});

/* ==========================================================================
   1. Canvas Lantern Particle Engine (60fps, Zero-Dep, Responsive)
   ========================================================================== */
class LanternParticleEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d', { alpha: true });
    
    this.particles = [];
    this.mouse = { x: -1000, y: -1000, radius: 120 };
    this.isRunning = false;
    this.animationFrameId = null;

    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.isMobile = window.innerWidth <= 768;
    this.particleCount = this.isMobile ? 26 : 56;

    this.init();
  }

  init() {
    this.resize();
    this.createParticles();
    this.bindEvents();
    this.start();
  }

  resize() {
    const parent = this.canvas.parentElement;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);
  }

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push(this.spawnParticle(true));
    }
  }

  spawnParticle(randomY = false) {
    const isGold = Math.random() < 0.18; // 18%は真鍮ゴールド
    return {
      x: Math.random() * this.width,
      y: randomY ? Math.random() * this.height : this.height + 20,
      radius: Math.random() * (isGold ? 1.6 : 2.4) + 0.8,
      speedY: Math.random() * 0.45 + 0.22,
      swaySpeed: Math.random() * 0.02 + 0.008,
      swayDistance: Math.random() * 1.6 + 0.6,
      swayOffset: Math.random() * Math.PI * 2,
      baseAlpha: Math.random() * 0.45 + 0.35,
      pulseSpeed: Math.random() * 0.028 + 0.015,
      pulseOffset: Math.random() * Math.PI * 2,
      color: isGold ? { r: 212, g: 175, b: 55 } : { r: 0, g: 240, b: 255 }
    };
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768;
      this.particleCount = this.isMobile ? 26 : 56;
      this.resize();
    }, { passive: true });

    window.addEventListener('pointermove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    }, { passive: true });

    window.addEventListener('pointerleave', () => {
      this.mouse.x = -1000;
      this.mouse.y = -1000;
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.start();
        } else {
          this.stop();
        }
      });
    }, { threshold: 0.05 });
    observer.observe(this.canvas);

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.stop();
      } else {
        this.start();
      }
    });
  }

  update() {
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      p.y -= p.speedY;
      p.swayOffset += p.swaySpeed;
      p.pulseOffset += p.pulseSpeed;

      p.x += Math.sin(p.swayOffset) * p.swayDistance * 0.3;

      const dx = p.x - this.mouse.x;
      const dy = p.y - this.mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < this.mouse.radius) {
        const force = (1 - dist / this.mouse.radius) * 1.5;
        p.x += (dx / dist) * force;
        p.y += (dy / dist) * force * 0.5;
      }

      if (p.y < -20 || p.x < -20 || p.x > this.width + 20) {
        this.particles[i] = this.spawnParticle(false);
      }
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (const p of this.particles) {
      const pulseAlpha = Math.max(0.12, p.baseAlpha + Math.sin(p.pulseOffset) * 0.25);
      const { r, g, b } = p.color;

      const grad = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3.6);
      grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${pulseAlpha})`);
      grad.addColorStop(0.35, `rgba(${r}, ${g}, ${b}, ${pulseAlpha * 0.45})`);
      grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

      this.ctx.fillStyle = grad;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius * 3.6, 0, Math.PI * 2);
      this.ctx.fill();

      // White Hot Core
      this.ctx.fillStyle = `rgba(255, 255, 255, ${pulseAlpha * 0.85})`;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius * 0.6, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }

  loop() {
    if (!this.isRunning) return;
    this.update();
    this.draw();
    this.animationFrameId = requestAnimationFrame(() => this.loop());
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.loop();
  }

  stop() {
    this.isRunning = false;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }
}

/* ==========================================================================
   2. Mouse-tracking Glow & 3D Tilt
   ========================================================================== */
function initCardTiltAndGlow() {
  if (window.matchMedia('(hover: none)').matches) return;

  const cards = document.querySelectorAll('.work-card');

  cards.forEach(card => {
    let bounds = card.getBoundingClientRect();
    let rAFId = null;

    const onPointerMove = (e) => {
      if (rAFId) return;
      rAFId = requestAnimationFrame(() => {
        bounds = card.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;
        const rotateX = ((y - centerY) / centerY) * -3.2;
        const rotateY = ((x - centerX) / centerX) * 3.2;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
        rAFId = null;
      });
    };

    const onPointerLeave = () => {
      if (rAFId) cancelAnimationFrame(rAFId);
      rAFId = null;
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    };

    card.addEventListener('pointermove', onPointerMove, { passive: true });
    card.addEventListener('pointerleave', onPointerLeave, { passive: true });
  });
}

/* ==========================================================================
   3. Navbar & Mobile Drawer
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.mobile-menu-toggle');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      header.classList.toggle('mobile-open');
    });

    document.querySelectorAll('.nav-link, .nav-btn').forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('mobile-open');
      });
    });
  }
}

/* ==========================================================================
   4. Category Filter
   ========================================================================== */
function initFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.work-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'grid';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ==========================================================================
   5. Card Thumbnails Image Switcher
   ========================================================================== */
function initThumbnailSwitching() {
  document.querySelectorAll('.work-visual-thumbs').forEach(thumbContainer => {
    const parentVisual = thumbContainer.closest('.work-visual');
    const mainImg = parentVisual.querySelector('.work-visual-main');

    thumbContainer.querySelectorAll('img').forEach(thumb => {
      thumb.addEventListener('click', (e) => {
        e.stopPropagation();
        const newSrc = thumb.getAttribute('data-src') || thumb.getAttribute('src');
        
        mainImg.style.opacity = '0.5';
        setTimeout(() => {
          mainImg.src = newSrc;
          mainImg.style.opacity = '1';
        }, 120);

        thumbContainer.querySelectorAll('img').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  });
}

/* ==========================================================================
   6. Rich Modal Lightbox & Navigation
   ========================================================================== */
function initModals() {
  const modalBackdrop = document.getElementById('details-modal');
  if (!modalBackdrop) return;

  const closeBtn = modalBackdrop.querySelector('.modal-close-btn');

  // Open modal
  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const appId = btn.getAttribute('data-open-modal');
      openModal(appId);
    });
  });

  const closeModal = () => {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeModal);

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modalBackdrop.classList.contains('open')) return;

    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      stepModalGallery(1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      stepModalGallery(-1);
    }
  });
}

function openModal(appId) {
  currentModalApp = appId;
  currentModalGalleryIndex = 0;
  renderModalContent(appId);
  const modalBackdrop = document.getElementById('details-modal');
  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function stepModalGallery(direction) {
  if (!currentModalApp) return;
  const data = APP_DATA[currentModalApp];
  if (!data) return;

  currentModalGalleryIndex = (currentModalGalleryIndex + direction + data.gallery.length) % data.gallery.length;
  updateModalGalleryView(data.gallery[currentModalGalleryIndex]);
}

function updateModalGalleryView(item) {
  const mainImg = document.getElementById('modal-main-image');
  const captionEl = document.getElementById('modal-image-caption');
  if (mainImg) {
    mainImg.style.opacity = '0.4';
    setTimeout(() => {
      mainImg.src = item.src;
      mainImg.style.opacity = '1';
    }, 100);
  }
  if (captionEl) captionEl.textContent = item.caption;

  document.querySelectorAll('.modal-gallery-thumbs img').forEach((el, idx) => {
    if (idx === currentModalGalleryIndex) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

function renderModalContent(appId) {
  const data = APP_DATA[appId];
  if (!data) return;

  const container = document.getElementById('modal-content-area');
  
  let thumbsHtml = '';
  data.gallery.forEach((item, index) => {
    thumbsHtml += `
      <img src="${item.src}" alt="${item.caption}" class="${index === 0 ? 'active' : ''}" onclick="selectModalGalleryIndex(${index})" />
    `;
  });

  let featuresHtml = '';
  data.features.forEach(feat => {
    featuresHtml += `<li><span style="color:var(--lamp-cyan-core); font-weight:bold; margin-right:8px;">✦</span> ${feat}</li>`;
  });

  let specsHtml = '';
  data.specs.forEach(spec => {
    specsHtml += `
      <div class="spec-card">
        <div class="spec-card-label">${spec.label}</div>
        <div class="spec-card-value">${spec.value}</div>
      </div>
    `;
  });

  let linksHtml = '';
  data.links.forEach(link => {
    const btnClass = link.isSecondary ? 'btn-card-action btn-card-secondary' : 'btn-card-action btn-card-primary';
    linksHtml += `
      <a href="${link.url}" class="${btnClass}" ${link.isExternal ? 'target="_blank" rel="noopener"' : ''}>
        ${link.text} ↗
      </a>
    `;
  });

  container.innerHTML = `
    <div class="modal-gallery">
      <div class="modal-gallery-viewport">
        <button class="gallery-nav-btn prev" aria-label="Previous" onclick="stepModalGallery(-1)">❮</button>
        <img id="modal-main-image" src="${data.gallery[0].src}" alt="${data.gallery[0].caption}" class="modal-gallery-main" />
        <button class="gallery-nav-btn next" aria-label="Next" onclick="stepModalGallery(1)">❯</button>
      </div>
      <p id="modal-image-caption" style="text-align:center; font-size:0.88rem; color:var(--text-silver); margin-top:10px;">${data.gallery[0].caption}</p>
      <div class="modal-gallery-thumbs">
        ${thumbsHtml}
      </div>
    </div>

    <div class="work-category" style="margin-top:18px;">${data.category}</div>
    <h2 style="font-family:var(--font-serif-gothic); font-size:1.9rem; font-weight:700; margin-bottom:6px; color:#fff;">${data.title}</h2>
    <p style="font-family:var(--font-heading-mincho); color:var(--lamp-cyan-core); font-size:1rem; margin-bottom:22px; font-weight:500;">${data.subtitle}</p>

    <div style="font-size:0.96rem; line-height:1.8; color:var(--text-silver); margin-bottom:28px; white-space:pre-line;">${data.description}</div>

    <h4 style="font-family:var(--font-heading-mincho); font-size:1.15rem; margin-bottom:14px; color:#fff;">主な特徴・システム</h4>
    <ul style="list-style:none; display:flex; flex-direction:column; gap:10px; margin-bottom:30px; font-size:0.92rem; color:var(--text-pure);">
      ${featuresHtml}
    </ul>

    <h4 style="font-family:var(--font-heading-mincho); font-size:1.15rem; margin-bottom:14px; color:#fff;">仕様・スペック</h4>
    <div class="modal-specs-grid">
      ${specsHtml}
    </div>

    <div style="display:flex; gap:14px; flex-wrap:wrap; margin-top:32px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.08);">
      ${linksHtml}
    </div>
  `;
}

window.selectModalGalleryIndex = function(index) {
  if (!currentModalApp) return;
  const data = APP_DATA[currentModalApp];
  if (!data || !data.gallery[index]) return;

  currentModalGalleryIndex = index;
  updateModalGalleryView(data.gallery[index]);
};

window.stepModalGallery = stepModalGallery;

/* ==========================================================================
   7. Copy Email & Toast Feedback
   ========================================================================== */
function initCopyButtons() {
  document.querySelectorAll('[data-copy-target]').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy-target');
      navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'コピーしました！ ✓';
        btn.style.background = 'var(--lamp-cyan-core)';
        btn.style.color = '#030509';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.color = '';
        }, 2200);
      });
    });
  });
}

/* ==========================================================================
   8. Mobile Bottom Bar ScrollSpy
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const bottomItems = document.querySelectorAll('.mobile-bottom-item');
  if (!bottomItems.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        bottomItems.forEach(item => {
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(s => observer.observe(s));
}
