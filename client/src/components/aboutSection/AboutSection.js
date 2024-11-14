import "./about-section.css"
import React, { useEffect, useRef, useState } from "react";

const AboutSection = () => {

  return (
    <div className="about-container">
      <div className="about-me-container">
        <div className="about-me-sentences">
          <div className="sentence1-about">
            נעים להכיר,
          </div>
          <div className="sentence2-about">
            רוחי...
          </div>
        </div>
      </div>
      <div className="about-txt">
        <p>
          ברוכים הבאים לאתר שלי!

          מאז שהייתי ילדה קטנה, תמיד רציתי להבין אנשים באמת. מה מניע אותם? מה גורם להם לשמוח, לפחד, לאהוב? כשגיליתי את האסטרולוגיה, הכל התחבר. זה הפך לכלי שדרכו אני יכולה לראות את הייחוד והיופי שבכל אדם, ולחבר את האנשים לאמת הפנימית שלהם.<br /><br />

          האסטרולוגיה היא למעשה שפה עתיקה שמבוססת על מפת הכוכבים בזמן לידתנו. היא מאפשרת לנו לגלות דפוסים אישיותיים, כישרונות, וגם אתגרים פנימיים שאנו נושאים איתנו. באמצעות הבנה של מפת הלידה האסטרולוגית שלנו, אנחנו יכולים להתחבר לעצמנו ברבדים עמוקים יותר, ולהכיר את עצמנו טוב יותר – את העוצמות שלנו ואת המקומות בהם יש לנו הזדמנות לגדול.<br /><br />

          כל פגישה, כל סדנה, כל אבחון – עבורי, זו הזדמנות מרגשת לגלות יחד איתכם את העוצמות והטוב שנמצאים בכם. כולנו לפעמים קצת אובדים בדרך, לפעמים לא רואים את כל הטוב שיש בנו. אבל כשאנחנו מתחילים להכיר את עצמנו באמת, כשהאסטרולוגיה עוזרת לנו לחשוף את מה שמיוחד בנו, פתאום מתעוררת בנו תשוקה אמיתית לצמוח, להשתפר ולהגיע הכי רחוק שאפשר.<br /><br />

          אני מזמינה אתכם להצטרף אליי למסע הזה – מסע של גילוי עצמי, של חיבור עמוק, ושל אהבה עצמית.<br />
          באהבה, בחיוך ובאמונה בטוב שבכם – נוכל יחד לגלות עולמות מופלאים ולהיות הגרסה הכי טובה של עצמכם.<br />
        </p>
        {/* <img alt="מאזניים" src="/3.png" className="horoscope Libra" />
        <img alt="דלי" src="/9.png" className="horoscope Aquarius" />
        <img alt="עקרב" src="/11.png" className="horoscope Scorpio" /> */}
      </div>
      <div className="about-question">
        <img alt="" src="/6white.png" className="horo Taurus-about" />
        <div className="p-about-question-div">
        <p className="p-about-question">
          ומאיפה הגעתי לזה?
        </p>
        </div>
        <img alt="" src="/7white.png" className="horo Aries-about" />
      </div>
      <div className="more-txt">
        <p>
          נעים להכיר,
          לחחיוי וטכמ וטכה וע ו8טאט ו8ט
          לםווא לוכב וככ ו8אאגס ו87אאב פן9ינ
          ןטטכה לטטכ לו7כה חןואאבהף
          ]ןןוי חיוטכע לחוכע חעטגב יטטכבחחי
          וןטימ חיט וטט ןטטכה ליטטה ליוה
          ןט חעה יוכ חיכ יכב
        </p>

      </div>


    </div>
  );
};

export default AboutSection;
