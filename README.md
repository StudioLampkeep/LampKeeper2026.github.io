# Studio LampKeep (蒼灯機関) 公式Webサイト

Studio LampKeep（蒼灯機関）の公式ポータルサイトです。GitHub Pages（`https://studiolampkeep.github.io/LampKeeper2026.github.io/`）を通じて全世界に公開されています。

- **公式ポータル**: [https://studiolampkeep.github.io/LampKeeper2026.github.io/](https://studiolampkeep.github.io/LampKeeper2026.github.io/)
- **公式YouTubeチャンネル**: [https://www.youtube.com/@StudioLampkeep](https://www.youtube.com/@StudioLampkeep)
- **公式GitHub**: [https://github.com/StudioLampkeep](https://github.com/StudioLampkeep)

---

## 🌟 サイト掲載タイトル

1. **Prince of Chaos ― 混沌迷宮と呪いの公子 ―**
   - **ジャンル**: 紙芝居 × 一人称地下迷宮RPG (Android)
   - **特徴**: 112場面の吹き出し会話劇、地下10階＋深淵回廊、全32曲完全オリジナルBGM、マルチエンディング（6種）。
   - **個別ページ**: [https://studiolampkeep.github.io/prince-of-chaos/](https://studiolampkeep.github.io/prince-of-chaos/)
   - **ポリシー**: [https://studiolampkeep.github.io/prince-of-chaos-privacy/](https://studiolampkeep.github.io/prince-of-chaos-privacy/)

2. **LampDrop：混沌迷宮の蒼き灯火 (LampDrop: Chaos Labyrinth)** — `v1.0.72` (Google Play 公開中)
   - **ジャンル**: 本格アーケード物理 × ダークファンタジー迷宮RPG (Android)
   - **特徴**: 90%透過12×20盤面、全46枚フルアートカード（15大ボス＋20種モブ波状戦＋味方11）、ボス必殺テレグラフ破り、自動難易度『魔導炉』、EX深淵（LV60–99）、日英6本ボーカルMV、9言語対応。
   - **Google Play**: [https://play.google.com/store/apps/details?id=com.lampkeep.blockdrop1988](https://play.google.com/store/apps/details?id=com.lampkeep.blockdrop1988)
   - **個別特設ページ**: [https://studiolampkeep.github.io/LampKeeper2026.github.io/lampdrop/](https://studiolampkeep.github.io/LampKeeper2026.github.io/lampdrop/)
   - **公式PV (YouTube)**: [https://www.youtube.com/watch?v=hOTzv1ojSjA](https://www.youtube.com/watch?v=hOTzv1ojSjA)
   - **ポリシー**: [lampdrop-privacy.html](lampdrop-privacy.html)

3. **青空文庫＆文書AI朗読 (Aozora & Document AI Reader)** — `v1.8.0` (Google Play 公開中)
   - **ジャンル**: AI複数声優オート配役 × オーディオブック＆文書朗読プレイヤー (Android / Windows PWA)
   - **特徴**: AI登場人物判別＆VOICEVOX 9キャラ完全内包、青空文庫18,000作品検索（136名作初期収録）、古典の現代語超訳＆7ヶ国語AI翻訳朗読、PDF・Word・TXT・Markdown流し込み＆AI OCR、画面OFF連続再生＆カーモード、4大テーマ・縦書き・環境音BGMミキサー。
   - **Google Play**: [https://play.google.com/store/apps/details?id=com.lampkeep.novel.aireader](https://play.google.com/store/apps/details?id=com.lampkeep.novel.aireader)
   - **個別特設ページ**: [https://studiolampkeep.github.io/LampKeeper2026.github.io/novel-ai-reader/](https://studiolampkeep.github.io/LampKeeper2026.github.io/novel-ai-reader/)
   - **公式PV / 使い方解説 (YouTube)**: [公式PV](https://www.youtube.com/watch?v=s_8apjh84RY) / [使い方解説ガイド](https://www.youtube.com/watch?v=RDAYXnzfNzM)
   - **ポリシー**: [privacy.html](privacy.html)

---

## 📁 ディレクトリ構成

```
.
├── index.html                  # 総合ポータルトップページ
├── lampdrop/                   # LampDrop 特設公式サイト一式
│   ├── index.html              # LampDrop 特設サイトトップ
│   ├── img/                    # 高画質ゲーム画面・フルアートカード画像
│   ├── store_promo/            # 日英ストアプロモーション画像
│   ├── video/                  # シネマティック動画・日英ボーカルMV
│   └── audio/                  # サウンドトラック・BGM・クロ救援ボイス
├── novel-ai-reader/            # 青空文庫＆文書AI朗読 特設サイト・マニュアル・規約
├── lampdrop-privacy.html       # LampDrop プライバシーポリシー（日英併記）
├── privacy.html                # 青空文庫＆文書AI朗読 プライバシーポリシー
├── app-ads.txt                 # Google AdMob 認証用必須ファイル
├── favicon.png                 # ファビコン
├── css/
│   └── style.css               # レスポンシブ＆ダークゴシックテーマCSS
├── js/
│   └── main.js                 # モーダル、画像切替、フィルター、パーティクル制御JS
└── assets/
    └── img/
        ├── brand/              # ロゴ・ブランドアイコン
        ├── poc/                # Prince of Chaos 画像・スクリーンショット
        ├── blockdrop/          # LampDrop スクリーンショット・Plan Aアイコン
        └── novelreader/        # 青空文庫＆文書AI朗読 スクリーンショット・アイコン
```

---

## 🚀 GitHub Pages への公開・デプロイ

リポジトリは `StudioLampkeep/LampKeeper2026.github.io` （`main` ブランチ）に接続されています。
変更をコミットして `git push` するだけで、数分以内に `https://studiolampkeep.github.io/LampKeeper2026.github.io/` に自動反映されます。

```powershell
git add .
git commit -m "Update official portal website"
git push origin main
```
