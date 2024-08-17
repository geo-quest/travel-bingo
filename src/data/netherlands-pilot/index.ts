import { TravelBingoGameData } from '../interfaces'
import { NetherlandsPilotChallenges } from './challenges'
import runs from './runs'

export default {
  title: {
    en: 'Netherlands Pilot',
    nl: 'Nederlandse Pilot',
    pt: 'Piloto na Holanda',
    zh: '荷兰试点',
  },
  icon: 'FlagTwoTone',
  color: '#1890ff',
  backgroundColor: '#e6f7ff',
  rules: {
    bonusPointsPerBingo: 30,
    bonusPointsPerPlace: 10,
    bonusForFirstChallenge: 10,
  },
  shortDescription: {
    en: 'Embark on a thrilling adventure across the Netherlands, where strategy, exploration, and a touch of mischief are your keys to victory in this high-stakes travel bingo challenge.',
    nl: 'Ga op een spannend avontuur door Nederland, waarbij strategie, verkenning en een vleugje ondeugendheid de sleutels tot de overwinning zijn in deze spannende reisbingo-uitdaging.',
    pt: 'Embarque em uma aventura emocionante pela Holanda, onde estratégia, exploração e um toque de travessura são suas chaves para a vitória neste desafio de bingo de viagem de alto risco.',
    zh: '踏上穿越荷兰的惊险冒险之旅，在这场高风险的旅行宾果挑战中，策略、探索和一点点恶作剧是取得胜利的关键。',
  },
  gamePlay: {
    en: `### Setup:

- Each team gets a \`6x6\` bingo board filled with a mix of **Normal**, **Curse**, and **Boost** challenges.
- Every team has the same board, but how you play it is up to you!

### Objective:

- Complete challenges to score points, and aim to get the highest score by the end of the game!

### Scoring:

- **Normal Challenges**: Complete a challenge and earn a point. Easy peasy! 🟢
- **Curse Challenges**: When you complete a curse challenge, you can give a nasty negative multiplier to an opponent’s next challenge. 🧙‍♂️ (Sorry, not sorry!)
- **Boost Challenges**: Complete one of these bad boys, and you get a sweet positive multiplier for your next challenge. 🚀 (Time to turbocharge your score!)
- **First Challenge Bonus**: The team that completes the first challenge gets a bonus \`10\` points. (The early bird gets the worm!)
- **Bingo Bonus**: Complete a row, column, or diagonal, and score a bonus \`30\` points. (Bingo never felt so good!)
- **Location Bonus**: Visit a new place and score a bonus \`10\` points. (Exploration is key!)
  - **City Rule**: A city is considered visited only if you get off at its train station. Make sure to step off the train and enjoy the sights!

### Submitting Challenges:

- Each team has their own WhatsApp group for submitting challenges.
- After completing a challenge, submit your proof (photo, video, etc.) to your group.
- The game admin will verify and approve the submission.
- Points are granted once the admin gives the thumbs-up! 👍

### The Finish Line:

- The game ends promptly at 6 PM. No late submissions, no exceptions!
- The team with the most points at the end wins eternal glory (or at least bragging rights until the next game). 🏆

### Tips & Tricks:

- **Plan Your Path**: Think about your next move carefully. Boosts can make you soar, while curses can send your opponents spiraling!
- **Timing is Everything**: Be strategic with when you complete your boost or curse challenges. A well-timed curse can make all the difference.
- **Have Fun!**: It’s all about the adventure. Enjoy the sights, have some laughs, and may the best team win!

Good luck, adventurers! 🌍🎉
`,
    nl: `### Opzet:

- Elk team krijgt een \`6x6\` bingobord gevuld met een mix van **Normale**, **Vloek** en **Boost** uitdagingen.
- Elk team heeft hetzelfde bord, maar hoe je het speelt is aan jou!

### Doel:

- Voltooi uitdagingen om punten te scoren en probeer aan het einde van het spel de hoogste score te behalen!

### Scoren:

- **Normale uitdagingen**: Voltooi een uitdaging en verdien een punt. Makkelijk! 🟢
- **Vloekuitdagingen**: Wanneer je een vloekuitdaging voltooit, kun je een vervelende negatieve vermenigvuldiger geven aan de volgende uitdaging van een tegenstander. 🧙‍♂️ (Sorry, not sorry!)
- **Boostuitdagingen**: Voltooi een van deze slechteriken en je krijgt een leuke positieve vermenigvuldiger voor je volgende uitdaging. 🚀 (Tijd om je score op te krikken!)
- **Eerste uitdagingsbonus**: Het team dat de eerste uitdaging voltooit, krijgt een bonus van \`10\` punten. (De vroege vogel vangt de worm!)
- **Bingo-bonus**: Maak een rij, kolom of diagonaal compleet en scoor een bonus van \`30\` punten. (Bingo voelde nog nooit zo goed!)
- **Locatiebonus**: Bezoek een nieuwe plek en scoor een bonus van \`10\` punten. (Verkennen is de sleutel!)
- **Stadsregel**: Een stad wordt alleen als bezocht beschouwd als je uitstapt bij het treinstation. Zorg ervoor dat je uit de trein stapt en geniet van de bezienswaardigheden!

### Uitdagingen indienen:

- Elk team heeft zijn eigen WhatsApp-groep om uitdagingen in te dienen.
- Dien na het voltooien van een uitdaging je bewijs (foto, video, enz.) in bij je groep.
- De beheerder van het spel zal de inzending verifiëren en goedkeuren.
- Punten worden toegekend zodra de beheerder de duim omhoog geeft! 👍

### De finishlijn:

- Het spel eindigt stipt om 18:00 uur. Geen late inzendingen, geen uitzonderingen!
- Het team met de meeste punten aan het einde wint eeuwige roem (of in ieder geval opscheppen tot het volgende spel). 🏆

### Tips & trucs:

- **Plan je pad**: Denk goed na over je volgende zet. Boosts kunnen je laten vliegen, terwijl vloeken je tegenstanders in een neerwaartse spiraal kunnen brengen!
- **Timing is Everything**: Wees strategisch met wanneer je je boost- of vloekuitdagingen voltooit. Een goed getimede vloek kan het verschil maken.
- **Veel plezier!**: Het draait allemaal om het avontuur. Geniet van de bezienswaardigheden, lach wat en moge het beste team winnen!

Veel succes, avonturiers! 🌍🎉
`,
    pt: `### Configuração:

- Cada equipe recebe um tabuleiro de bingo \`6x6\` preenchido com uma mistura de desafios **Normal**, **Curse** e **Boost**.
- Cada equipe tem o mesmo tabuleiro, mas como você joga depende de você!

### Objetivo:

- Complete desafios para marcar pontos e tente obter a maior pontuação até o final do jogo!

### Pontuação:

- **Desafios normais**: Complete um desafio e ganhe um ponto. Fácil! 🟢
- **Desafios de maldição**: Quando você completa um desafio de maldição, você pode dar um multiplicador negativo desagradável para o próximo desafio de um oponente. 🧙‍♂️ (Desculpe, mas não me arrependo!)
- **Desafios de impulso**: Complete um desses meninos maus e você ganha um multiplicador positivo doce para seu próximo desafio. 🚀 (Hora de turbinar sua pontuação!)
- **Bônus do Primeiro Desafio**: A equipe que completar o primeiro desafio ganha um bônus de \`10\` pontos. (Quem chegar cedo ganha a minhoca!)
- **Bônus de Bingo**: Complete uma linha, coluna ou diagonal e ganhe um bônus de \`30\` pontos. (Bingo nunca foi tão bom!)
- **Bônus de Localização**: Visite um novo lugar e ganhe um bônus de \`10\` pontos. (Exploração é a chave!)
- **Regra da Cidade**: Uma cidade é considerada visitada somente se você descer na estação de trem dela. Não deixe de descer do trem e aproveitar as vistas!

### Enviando Desafios:

- Cada equipe tem seu próprio grupo do WhatsApp para enviar desafios.
- Após completar um desafio, envie sua prova (foto, vídeo, etc.) para seu grupo.
- O administrador do jogo verificará e aprovará o envio.
- Os pontos são concedidos quando o administrador dá o sinal de positivo! 👍

### A linha de chegada:

- O jogo termina pontualmente às 18h. Sem envios atrasados, sem exceções!
- O time com mais pontos no final ganha a glória eterna (ou pelo menos o direito de se gabar até o próximo jogo). 🏆

### Dicas e truques:

- **Planeje seu caminho**: pense cuidadosamente sobre seu próximo movimento. Os impulsos podem fazer você voar, enquanto as maldições podem fazer seus oponentes girarem em espiral!
- **O momento é tudo**: seja estratégico ao concluir seus desafios de impulso ou maldição. Uma maldição na hora certa pode fazer toda a diferença.
- **Divirta-se!**: é tudo sobre a aventura. Aproveite as vistas, dê algumas risadas e que o melhor time vença!

Boa sorte, aventureiros! 🌍🎉
`,
    zh: `### 设置：

- 每个团队都会获得一个 \`6x6\` 宾果板，上面有 **普通**、**诅咒** 和 **提升** 挑战。
- 每个团队都有相同的板，但如何玩取决于您！

### 目标：

- 完成挑战以获得积分，并争取在游戏结束时获得最高分！

### 得分：

- **普通挑战**：完成挑战并获得积分。小菜一碟！🟢
- **诅咒挑战**：完成诅咒挑战后，您可以给对手的下一个挑战一个令人讨厌的负乘数。🧙‍♂️（抱歉，不抱歉！）
- **提升挑战**：完成其中一个坏男孩，您将获得下一个挑战的甜蜜正乘数。 🚀（是时候提高你的分数了！）
- **第一个挑战奖励**：完成第一个挑战的团队将获得 \`10\` 分的奖励。（早起的鸟儿有虫吃！）
- **宾果奖励**：完成一行、一列或对角线，并获得 \`30\` 分的奖励。（宾果从来没有这么好过！）
- **地点奖励**：访问一个新地方并获得 \`10\` 分的奖励。（探索是关键！）
- **城市规则**：只有在火车站下车，才算访问过该城市。一定要下火车，欣赏风景！

### 提交挑战：

- 每个团队都有自己的 WhatsApp 群组来提交挑战。
- 完成挑战后，向你的群组提交你的证明（照片、视频等）。
- 游戏管理员将验证并批准提交。
- 管理员点赞后即可获得积分！ 👍

### 终点线：

- 游戏于下午 6 点准时结束。不接受迟交，没有例外！
- 最后得分最高的队伍将赢得永恒的荣耀（或至少在下一场比赛之前拥有吹牛的权利）。🏆

### 提示和技巧：

- **规划你的路线**：仔细考虑你的下一步行动。提升可以让你飞翔，而诅咒可以让你的对手陷入困境！
- **时机就是一切**：在完成提升或诅咒挑战时要有策略。适时的诅咒可以带来很大的不同。
- **玩得开心！**：一切都是为了冒险。欣赏美景，开怀大笑，愿最好的团队获胜！

祝你好运，冒险家们！🌍🎉
`,
  },
  // 6x6 grid of challenges
  challenges: [
    [
      NetherlandsPilotChallenges.DomTowerSnapshot, // utrecht
      NetherlandsPilotChallenges.RepurposedHistory, // any city
      NetherlandsPilotChallenges.WindmillWonder, // utrecht
      NetherlandsPilotChallenges.Grachtenhuis, // utrecht
      NetherlandsPilotChallenges.FindMiffy, // utrecht
      NetherlandsPilotChallenges.TheLettersToUtrecht, // utrecht
    ],
    [
      NetherlandsPilotChallenges.Photobomb, // any city
      NetherlandsPilotChallenges.PublicKaraoke, // any city
      NetherlandsPilotChallenges.CheersToTheDutch, // any city
      NetherlandsPilotChallenges.StreetArtHunt, // any city
      NetherlandsPilotChallenges.SilentTrain, // any city
      NetherlandsPilotChallenges.PetsAreTheBest, // any city
    ],
    [
      NetherlandsPilotChallenges.ComplimentALocal, // any city
      NetherlandsPilotChallenges.GlassWalk, // Arnhem
      NetherlandsPilotChallenges.StatuePose, // any city
      NetherlandsPilotChallenges.GuessTheJob, // any city
      NetherlandsPilotChallenges.AlphabetCity, // any city
      NetherlandsPilotChallenges.StatueSelfie, // any city
    ],
    [
      NetherlandsPilotChallenges.InternationalCourt, // den haag
      NetherlandsPilotChallenges.ProgrammingBirthplace, // den haag
      NetherlandsPilotChallenges.BinnenhofBeauty, // den haag
      NetherlandsPilotChallenges.WindmillSpin, // any city
      NetherlandsPilotChallenges.PublicDanceDare, // any city
      NetherlandsPilotChallenges.ProvincesShowdown, // any city
    ],
    [
      NetherlandsPilotChallenges.MarketBrowsing, // any city
      NetherlandsPilotChallenges.LocalFlavor, // any city
      NetherlandsPilotChallenges.WoodenShoes, // any city
      NetherlandsPilotChallenges.InsuranceLandmark, // any city
      NetherlandsPilotChallenges.DutchChat, // any city
      NetherlandsPilotChallenges.JapaneseChristmas, // utrecht
    ],
    [
      NetherlandsPilotChallenges.BullishAdventure, // amsterdam
      NetherlandsPilotChallenges.Paparazzi, // amsterdam
      NetherlandsPilotChallenges.VOCHeritage, // amsterdam
      NetherlandsPilotChallenges.TwoCitiesOneName, // amsterdam, haarlem, breukelen (center)
      NetherlandsPilotChallenges.RoyalConnection, // amsterdam, den haag
      NetherlandsPilotChallenges.DutchMasters, // any city
    ],
  ],

  runs: runs,
} as TravelBingoGameData
