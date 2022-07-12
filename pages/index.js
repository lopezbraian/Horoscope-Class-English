import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const data = [
  {
    name: "Aries",
    image: "/images/aries.png",
    content:
      "Your love will be strong and in a good mood so you can enjoy life. You will be in a good position for a job. You will be able to make a good profit.",
    from: "March 21",
    to: "April 19",
    color: "#c9ddff",
  },
  {
    name: "Taurus",
    image: "/images/taurus.png",
    content:
      "You must keep away from people who are not in your best interests. This month will keep on good luck for you , You'll find that things are slipping nicely into place for you today, Taurus. Your persuasive manner and gentle nudges are just enough to get people where you want them. Keep it from is all yours if you want it. Any risks you take today, however, are likely to work out in your favor.",
    from: "April 20",
    to: "May 20",
    color: "#ecb0e1",
  },
  {
    name: "Gemini",
    image: "/images/gemini.png",
    content:
      "Your dreams won't come true unless you believe in and act on them, Cancer. No one else is going to do it for you. Unless you have a fairy godmother, you need to take matters into your own hands. Realize, however, that you can get there many different ways. The first step is to believe in yourself. Anything is possible. Today is a great day to let your imagination call the shots.",
    from: "May 21",
    to: "June 20",
    color: "#de6c83",
  },
  {
    name: "Cancer",
    image: "/images/cancer.png",
    content:
      "Your dreams won't come true unless you believe in and act on them, Cancer. No one else is going to do it for you. Unless you have a fairy godmother, you need to take matters into your own hands",
    from: "June 21",
    to: "July 22",
    color: "#c1aac0",
  },
  {
    name: "Leo",
    image: "/images/leo.png",
    content:
      "You’ll be hitting the grind as you work harder than ever to achieve your goals. Even if it takes more time than you expected, Leo, don’t give up. You’re making more progress than you realize.",
    from: "July 23",
    to: "August 22",
    color: "#2cf6b3",
  },
  {
    name: "Virgo",
    image: "/images/virgo.png",
    content:
      "You'll bring out your fears and you must face them. Btw in the love , you'll be lucky",
    from: "August 23",
    to: "September 22",
    color: "#006d77",
  },
  {
    name: "Libra",
    image: "/images/libra.png",
    content:
      "There will be plenty of fireworks in the bedroom and your personal life. From forming intimate bonds in private to fighting over bills, your life is changing and you need to decide if the changes are right for you.",
    from: "September 23",
    to: "October 22",
    color: "#83c5be",
  },
  {
    name: "Scorpio",
    image: "/images/scorpio.png",
    content:
      "The next six weeks will feel like a balancing act after Mars enters Taurus on Monday. With your ruling planet moving through your partnership zone, you’ll need to learn to work with others. Don’t be so stubborn that you get into fights over nothing, Scorpio. Choose your battles wisely so you can work with rather than against someone.",
    from: "October 23",
    to: "November 21",
    color: "#edf6f9",
  },
  {
    name: "Sagittarius",
    image: "/images/sagittarius.png",
    content:
      "Summer is supposed to be lazy, but you’ll discover that you’re busier than ever when Mars enters Taurus and your productivity zone. on Monday. You need to roll up your sleeves and get to work if you want to finish some important tasks.",
    from: "November 22",
    to: "December 21",
    color: "#ffddd2",
  },
  {
    name: "Capricorn",
    image: "/images/capricorn.png",
    content:
      "It’s all about having fun when Mars enters Taurus on Monday and moves through your pleasure zone for the next six weeks. Actually use your vacation days to chill and unwind, Capricorn. ",
    from: "December 22",
    to: "January 19",
    color: "#e29578",
  },
  {
    name: "Aquarius",
    image: "/images/aquarius.png",
    content:
      "You’ll be in a compassionate and nurturing mood this month, dear Aquarius, as the Cancer sun illuminates the sector of your chart that governs service. Though you’ll feel more sensitive to the needs of those around you, don’t abandon your own desires while you’re catering to others’ or you could lose touch with your emotions.",
    from: "January 20",
    to: "February 18",
    color: "#ffe066",
  },
  {
    name: "Pisces",
    image: "/images/pisces.png",
    content:
      "This luminary placement lights a fire within as the Universe pushes you to pursue the things that bring you passion and excitement, though moments of solitude will still be welcome.",
    from: "February 19",
    to: "March 20",
    color: "#50514f",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Horoscope</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Horoscope</h1>
        <div>
          <ul className={styles.list}>
            {data.map((horoscope) => (
              <li
                key={horoscope.name}
                className={styles["flip-card"]}
                style={{
                  background: horoscope.color,
                }}
              >
                <div className={styles["flip-card-inner"]}>
                  <div className={styles["flip-card-front"]}>
                    <div className={styles.horoscope}>
                      <div className={styles.horoscope__name}>
                        <h2>{horoscope.name}</h2>
                      </div>
                      <div className={styles.horoscope__image}>
                        <Image
                          src={horoscope.image}
                          alt={horoscope.name}
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className={styles.horoscope__from}>
                        <p>From: {horoscope.from}</p>
                      </div>
                      <div className={styles.horoscope__to}>
                        <p>To: {horoscope.to}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["flip-card-back"]}>
                    <p>{horoscope.content}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
