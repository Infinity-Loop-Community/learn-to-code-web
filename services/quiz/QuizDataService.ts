import {QuizDTO} from "@/services/quiz/QuizDTO";
import {AttemptDTO} from "@/services/quiz/attempt/AttemptDTO";

export const QUIZ_ID = "fcf7890f-9c72-46d3-931e-34494307be37";
export const ATTEMPT_ID = "37093624-0540-46b5-b135-23ae68f646fe";

export default class QuizDataService {

  async fetchQuizDataByQuizId(quizId: String): Promise<QuizDTO> {

    const data: QuizDTO = {
      id: QUIZ_ID,

      course: {
        id: "32ca6d6e-5feb-494c-8950-c3a0c76f4b3f",
        title: 'Frontend Development',
      },

      courseStep: {
        id: "c7486278-a50c-4629-89b9-cc1c74d7a538",
        title: 'The essentials of the Web',
      },

      questions: [{
        id: "71cfcec5-0af5-44af-b159-6e0be8afc098",
        text: "What is HTML used for?",
        difficulty: "easy",
        answers: [
          {
            id: "f5199684-de22-4a0f-ab54-da45b6aa1e5a",
            text: "Styling the website",
            isCorrect: false,
            description: "Styling a website is primarily done using CSS, which helps in determining colors, font sizes, positioning, and other visual elements.",
          }, {
            id: "afd4e674-fe5b-4e9d-84bc-7fc843205043",
            text: "Describing the structure of a webpage",
            isCorrect: true,
            description: "HTML stands for HyperText Markup Language and it provides the basic structure to a webpage. Through HTML, the browser understands headings, paragraphs, links, and other content types."
          }, {
            id: "a8df877e-bb6f-4c2d-8401-bab33115ee18",
            text: "Creating animations for a webpage",
            isCorrect: false,
            description: "While animations can be added to a webpage, they are typically achieved using both CSS and JavaScript, depending on the complexity. HTML itself isn't used for animations."
          }, {
            id: "eaadae67-508c-4d8f-98ce-d3e94161ab28",
            text: "Accessing web databases",
            isCorrect: false,
            description: "Accessing databases is generally the realm of backend languages and APIs, not directly through HTML."
          },
        ]
      }, {
        id: "21a42207-9255-4612-8674-dc026c2609f2",
        text: "Which of the following is NOT an HTML element?",
        difficulty: "easy",
        answers: [
          {
            id: "fb97d7f0-e7ad-4a01-84a9-745c4d24b1b9",
            text: "<heading>",
            isCorrect: false,
            description: "The term <heading> is not used as an HTML element. Instead, we have heading tags that range from <h1> to <h6> to denote headings of different levels."
          },
          {
            id: "a13f4915-eb42-4c71-b00e-4115042f5043",
            text: "<paragraph>",
            isCorrect: false,
            description: "<paragraph> is not the correct HTML element for creating paragraphs. The right tag for a paragraph in HTML is <p>."
          },
          {
            id: "6724a3e9-202b-4f63-a415-31245f87fc0c",
            text: "<list>",
            isCorrect: false,
            description: "While you can create lists in HTML, the tag <list> doesn't exist. For lists, we use <ul> for unordered lists and <ol> for ordered lists."
          },
          {
            id: "3371a66a-ec9a-489d-b4c0-5323d0ab74a5",
            text: "None of the above",
            isCorrect: true,
            description: "All of the provided options are not standard HTML elements."
          }
        ]
      },
        {
          id: "ecdf8c56-35e5-48a3-bf1a-351f147fd5cc",
          text: "Which language is primarily used to determine the visual style of a website?",
          difficulty: "easy",
          answers: [
            {
              id: "182ec5a8-e3b7-4e55-a2d4-8937ddf77eef",
              text: "JavaScript",
              isCorrect: false,
              description: "JavaScript is mainly used for adding functionality and interactivity to web pages."
            },
            {
              id: "ebe76e3d-45a6-4e63-971d-05655f95ee57",
              text: "Python",
              isCorrect: false,
              description: "Python is a programming language that's often used for backend web development, data analysis, artificial intelligence, and more."
            },
            {
              id: "e2ad243a-a84b-44c3-8fe6-9dbfb5e3c749",
              text: "HTML",
              isCorrect: false,
              description: "HTML is the markup language used to structure content on the web. While it can carry some style attributes, CSS is the primary tool for styling."
            },
            {
              id: "9fbb4846-8351-4057-8cf0-9dc1af284c69",
              text: "CSS",
              isCorrect: true,
              description: "CSS (Cascading Style Sheets) is the language specifically designed to style web content. It defines how elements should appear in terms of layout, colors, fonts, and more."
            }
          ]
        }, {
          id: "7c0e7c9c-7a5f-4fa0-bc3e-57c5f8d15d8f",
          text: "What is the primary purpose of visual design in web development?",
          difficulty: "easy",
          answers: [
            {
              id: "d08ac14a-2e92-42ca-8ed4-eee520caa8b5",
              text: "Accelerating website speed",
              isCorrect: false,
              description: "While a well-designed website can improve user experience, the speed of a website is more about optimization, efficient coding, and hosting solutions."
            },
            {
              id: "605d727b-9a7e-4e13-8437-db664ce84afe",
              text: "Ensuring website security",
              isCorrect: false,
              description: "Website security is crucial, but visual design isn't directly related to it. Security measures involve both frontend and backend strategies, encryptions, and more."
            },
            {
              id: "f72d1fee-7461-4e84-a56a-001a015ffa40",
              text: "Delivering a unique message and enhancing user experience",
              isCorrect: true,
              description: "Visual design uses typography, color, graphics, and more to help convey a unique message and provide a memorable user experience."
            },
            {
              id: "71dac8d4-5bea-4efa-b856-af7070739555",
              text: "Backing up website data",
              isCorrect: false,
              description: "Backing up website data is an administrative task and not a direct responsibility of visual design."
            }
          ]
        }, {
          id: "d56c77b9-ae12-4f01-b7c3-607d5c54cdca",
          text: "Why is web accessibility important?",
          difficulty: "easy",
          answers: [
            {
              id: "03ef7582-320a-4364-94da-e978e69955ef",
              text: "It ensures that websites look the same on all devices.",
              isCorrect: false,
              description: "While a consistent appearance across devices is essential, that's more about responsive design than accessibility."
            },
            {
              id: "1919a4b9-6ee1-44e3-8876-12f2db06be45",
              text: "It makes websites load faster.",
              isCorrect: false,
              description: "Web accessibility doesn't necessarily mean faster load times. Load times depend on optimization techniques, server speeds, and more."
            },
            {
              id: "14a99e8a-d57f-45d2-8a9d-6d6d8d6a74a5",
              text: "It guarantees that websites can be understood and navigated by everyone, including people with disabilities.",
              isCorrect: true,
              description: "Accessibility ensures that web content and user interfaces are accessible to all users, regardless of physical or cognitive disabilities, ensuring inclusivity on the web."
            },
            {
              id: "14d19e0a-c1e7-47e7-950e-f4c020702b8d",
              text: "It ensures higher search engine rankings.",
              isCorrect: false,
              description: "While search engines do value accessible websites, the primary goal of web accessibility is inclusiveness, not SEO."
            }
          ]
        }, {
          id: "93521f64-ea8c-4f92-9174-3384c9c3a71b",
          text: "What does responsive web design ensure?",
          difficulty: "easy",
          answers: [
            {
              id: "d9f45de6-4cc8-42ee-ae71-d906a272dfaa",
              text: "Faster loading speed on mobile devices",
              isCorrect: false,
              description: "Responsive design doesn't inherently speed up website loading times. Its main goal is adaptability."
            },
            {
              id: "9243f14c-d696-447b-a3d1-5e290c39984f",
              text: "Higher security against web threats",
              isCorrect: false,
              description: "Responsive design focuses on layout adaptability, not security."
            },
            {
              id: "39d17ba1-c57a-49e7-9840-b69560b1891a",
              text: "Flexibility in website appearance according to device size and orientation",
              isCorrect: true,
              description: "Responsive web design allows websites to adjust and look good on devices of all sizes, whether it's a large monitor, tablet, or smartphone."
            },
            {
              id: "dd1f14fc-67e8-4e78-ae24-c62f13ebeae7",
              text: "Vibrant color schemes for websites",
              isCorrect: false,
              description: "Color schemes are part of visual design. Responsiveness is about layout adjustments based on screen sizes."
            }
          ]
        },
        {
          id: "bcf1566a-0f20-4425-9936-6534d7cc44e7",
          text: "Which of the following is a powerful layout method introduced in CSS3?",
          difficulty: "easy",
          answers: [
            {
              id: "9c506bb7-9229-4b42-a68c-6b14e8d36740",
              text: "CSS Shapes",
              isCorrect: false,
              description: "CSS Shapes is about wrapping content around custom paths, not about layout per se."
            },
            {
              id: "2f6c5c9b-85ef-4f60-8e68-38f61c621621",
              text: "CSS Flexbox",
              isCorrect: true,
              description: "CSS Flexbox provides an efficient way to lay out, align, and distribute space among items in a container, even when their sizes are unknown or dynamic."
            },
            {
              id: "0ac9c5b5-4de9-4873-87fc-563b1b3e7502",
              text: "CSS Templates",
              isCorrect: false,
              description: "There's no standard feature named 'CSS Templates'."
            },
            {
              id: "df26ab64-37d5-48f9-b29b-3c388a395c71",
              text: "CSS Fonts",
              isCorrect: false,
              description: "CSS Fonts relates to font-face and loading custom fonts, not layouts."
            }
          ]
        }, {
          id: "83b7c94b-8e17-4c04-95ca-cf28cb3f80a9",
          text: "What does the CSS Grid enable in terms of layout design?",
          difficulty: "easy",
          answers: [
            {
              id: "f86ac66b-2315-4692-a568-1da2d4f62f5b",
              text: "It allows embedding multimedia.",
              isCorrect: false,
              description: "While multimedia can be placed within a CSS Grid, the grid itself is not specifically for embedding multimedia."
            },
            {
              id: "f569a47f-3313-4c85-8c0e-46068977300d",
              text: "It ensures website security.",
              isCorrect: false,
              description: "CSS Grid focuses on layout and has nothing to do with security."
            },
            {
              id: "a0c69a6d-0c50-4b3a-9b7d-c7e2a70fb046",
              text: "It enables easy creation of flexible, two-dimensional layouts.",
              isCorrect: true,
              description: "CSS Grid provides a method for placing elements within columns and rows, making complex responsive layouts more manageable."
            },
            {
              id: "7d7c08fa-5c9a-4a83-8a50-e8f14f4af421",
              text: "It automates browser compatibility.",
              isCorrect: false,
              description: "Browser compatibility depends on various factors. While Grid is supported in many modern browsers, its use doesn't 'automate' compatibility."
            }
          ]
        },
        {
          id: "4e856cb9-8542-4bf6-a390-67cfe656bc4c",
          text: "Which of the following elements can describe text as a heading in HTML?",
          difficulty: "easy",
          answers: [
            {
              id: "f9fa1c7a-2090-45f0-9bd2-0b86b015aa61",
              text: "<header>",
              isCorrect: false,
              description: "The <header> element typically contains introductory content or navigation links and not used as a standard heading."
            },
            {
              id: "a9788b44-1907-4d6a-99af-175c4af699b1",
              text: "<heading>",
              isCorrect: false,
              description: "There is no standard <heading> tag in HTML."
            },
            {
              id: "5a604663-bd84-4550-b50f-c71a2606303d",
              text: "<h1>",
              isCorrect: true,
              description: "The <h1> tag in HTML is used to represent the top-level heading, making it the most important among the heading tags ranging from <h1> to <h6>."
            },
            {
              id: "60a175d3-60f5-465f-879e-b36d8e11e417",
              text: "<top>",
              isCorrect: false,
              description: "The <top> tag doesn't exist in standard HTML."
            }
          ]
        },

        // advanced
        {
          id: "6e83a010-0f61-42e2-9ea1-ba0fb75f5595",
          text: "When you want to make a list of items without any specific order, which HTML tag would you use?",
          difficulty: "medium",
          answers: [
            {
              id: "0c92b827-8f9a-4569-a671-b62180a623c3",
              text: "<ol>",
              isCorrect: false,
              description: "The <ol> tag is used for ordered lists, where the order of items is important."
            },
            {
              id: "8896b43d-ff1b-4070-a04d-7a7f36917c95",
              text: "<dl>",
              isCorrect: false,
              description: "The <dl> tag is for description lists and isn't typically used for general lists."
            },
            {
              id: "0640e444-2af2-4073-a501-26a05e19504d",
              text: "<ul>",
              isCorrect: true,
              description: "The <ul> tag stands for unordered list, which is used for lists where order doesn't matter."
            },
            {
              id: "6097e45a-c261-49e2-af42-0738a222bef1",
              text: "<list>",
              isCorrect: false,
              description: "There is no standard <list> tag in HTML."
            }
          ]
        }, {
          id: "7635a62b-851c-40c0-ae24-65a10e5067f8",
          text: "Considering the 'Cascading' in Cascading Style Sheets (CSS), which of the following statements is true?",
          difficulty: "medium",
          answers: [
            {
              id: "f42a1b38-d270-4bf5-8fd3-c5540048c818",
              text: "External stylesheets have a higher priority than inline styles.",
              isCorrect: false,
              description: "Inline styles have a higher priority than external stylesheets."
            },
            {
              id: "e9201478-20f5-4052-af95-4c0c7fdd9001",
              text: "The last rule defined overrides any previous, conflicting rules.",
              isCorrect: true,
              description: "Cascading means that the order of CSS rules matters. If two rules conflict, the latter rule will take precedence, given they have the same specificity."
            },
            {
              id: "26e5c620-6b30-41c6-9458-c92658ee099e",
              text: "All styles have an equal weight, regardless of where they are defined.",
              isCorrect: false,
              description: "Styles do not have equal weight; their application is determined by specificity and order."
            },
            {
              id: "be64b962-c0a2-4f36-9d99-37ca9d62f410",
              text: "Inline styles only apply to JavaScript-generated content.",
              isCorrect: false,
              description: "Inline styles can be applied directly to any HTML element, not just JavaScript-generated content."
            }
          ]
        }, {
          "id": "9a34bb89-58a8-4b65-992f-2371e5ee45db",
          "text": "In responsive design, what does the 'viewport' refer to?",
          "difficulty": "medium",
          "answers": [
            {
              "id": "e953d642-df57-4122-a891-a4fcb3af45fc",
              "text": "The visible area of a webpage that the user can interact with.",
              "isCorrect": true,
              "description": "The viewport is the user's visible area of a web page. It varies with the device, and it can be controlled using the <meta> viewport element."
            },
            {
              "id": "0d4d154c-4e46-459a-a16c-4b0e18e0995e",
              "text": "The server's perspective on how to serve content.",
              "isCorrect": false,
              "description": "The server doesn't have a 'perspective'; it serves content based on requests."
            },
            {
              "id": "be0eeead-9146-4bfa-98ea-425393077180",
              "text": "The total area of a website, including off-screen content.",
              "isCorrect": false,
              "description": "The viewport only concerns what's currently visible and does not include off-screen content."
            },
            {
              "id": "78d66fa7-6739-42c6-b2d9-dc9b593072b8",
              "text": "The framework used to build mobile-responsive designs.",
              "isCorrect": false,
              "description": "While certain frameworks can help with responsive design, the term 'viewport' does not pertain to any specific framework."
            }
          ]
        }, {
          "id": "6ff92df4-05b2-42bc-9c0b-905957843d6b",
          "text": "Given the growth of mobile web browsing, why is Flexbox considered an important tool in responsive design?",
          "difficulty": "medium",
          "answers": [
            {
              "id": "6e7c401a-9c8f-46a7-8ab3-c2be1a9a8f9c",
              "text": "It enables developers to use less JavaScript.",
              "isCorrect": false,
              "description": "While Flexbox can reduce the need for some layout-related JavaScript, its main purpose isn't about reducing JavaScript usage."
            },
            {
              "id": "18cf46b7-5c95-4549-a9ce-b2aa579a7207",
              "text": "It allows more vibrant color schemes.",
              "isCorrect": false,
              "description": "Flexbox is about layout, not color schemes."
            },
            {
              "id": "81145ae9-0592-4a8b-a0ee-5a7e7ec04359",
              "text": "Flexbox layouts adapt to different screen sizes without requiring pixel-based dimensions.",
              "isCorrect": true,
              "description": "Flexbox allows for flexible layouts that can adapt to various screen sizes and orientations, making it easier to create responsive designs without relying heavily on fixed dimensions."
            },
            {
              "id": "56b400e1-c5f6-46e2-aa14-0fcee057e34a",
              "text": "It's a plugin that makes websites mobile-friendly automatically.",
              "isCorrect": false,
              "description": "Flexbox is not a plugin; it's a CSS layout model."
            }
          ]
        }, {
          "id": "2fb15eb6-0f15-422a-9a67-8aa7d7a78336",
          "text": "In the context of CSS Grid, what does the 'fr' unit stand for?",
          "difficulty": "medium",
          "answers": [
            {
              "id": "f28ea0d2-f0f4-4393-8a17-502c6cc69bf8",
              "text": "Frame",
              "isCorrect": false,
              "description": "While 'frame' sounds related to grids or layouts, it's not what 'fr' represents."
            },
            {
              "id": "c3aa9f4d-0b53-421b-98e2-2520a1f66db7",
              "text": "Fraction",
              "isCorrect": true,
              "description": "The 'fr' unit in CSS Grid stands for 'fraction'. It represents a fraction of the available space in the grid container."
            },
            {
              "id": "dcf8a69e-9a21-4da8-9f80-cf322f5372b2",
              "text": "Frequency",
              "isCorrect": false,
              "description": "Frequency is not a unit of measurement in CSS Grid."
            },
            {
              "id": "c4e6e9b0-e530-4b64-91b2-39e40fdda333",
              "text": "Format",
              "isCorrect": false,
              "description": "Format doesn't correlate with the purpose of 'fr' in grid layouts."
            }
          ]
        },

        // hard
        {
          id: "e3e70682-c209-4cac-629f-6fbed82c07cd",
          text: "Which of the following best describes 'Semantic HTML'?",
          difficulty: "hard",
          answers: [
            {
              id: "bea4e168-d12f-4bcc-9f35-dc9f1a9df8d9",
              text: "HTML that boosts the website's SEO",
              isCorrect: false,
              description: "While semantic HTML can positively influence SEO, its primary purpose isn't solely for boosting SEO."
            },
            {
              id: "f49b9dab-4e0a-4a04-9cfd-af3f8fc0f3b1",
              text: "HTML with embedded multimedia elements",
              isCorrect: false,
              description: "Embedding multimedia elements doesn't make HTML semantic."
            },
            {
              id: "b9d4bb3a-5869-4320-a2c1-d8e0d7a9e4dd",
              text: "HTML where elements are used according to their meaning, not just their appearance",
              isCorrect: true,
              description: "Semantic HTML involves using HTML elements for their given meaning, which helps in improving web accessibility, making websites more readable for both users and machines."
            },
            {
              id: "1eac9ca9-4813-4060-8deb-f387e2fe9a2e",
              text: "HTML that includes animations and dynamic content",
              isCorrect: false,
              description: "Animations and dynamic content are unrelated to the semantics of an HTML document."
            }
          ]
        }, {
          id: "76b893dd-e5db-4867-9a3f-8872e7d07d70",
          text: "Which property would you use in CSS if you wanted to set the space between the content of an element and its border?",
          difficulty: "hard",
          answers: [
            {
              id: "84f8f61f-9bb7-4c1b-a59b-252bc05fb063",
              text: "margin",
              isCorrect: false,
              description: "margin is the space outside the border, between the element and its surrounding elements."
            },
            {
              id: "88cd1c82-bec7-4032-bbb4-f25c36a8740f",
              text: "border",
              isCorrect: false,
              description: "border sets the border around an element but doesn't deal with spacing."
            },
            {
              id: "1c782898-3c05-4dd6-8cb9-9308a2cf0905",
              text: "spacing",
              isCorrect: false,
              description: "spacing is not a standard CSS property."
            },
            {
              id: "f7658b04-07b1-40ef-9cd4-8e3eb70de37f",
              text: "padding",
              isCorrect: true,
              description: "Padding in CSS refers to the space between the content of an element and its border. It's an inner spacing."
            }
          ]
        },
        {
          id: "d175e7e0-b869-4a46-963a-e978564dfdc0",
          text: "Which of the following pseudo-classes targets elements based on their position in a parent element?",
          difficulty: "hard",
          answers: [
            {
              id: "f7ae7e5c-f6ef-48ea-b34b-17a275e8c430",
              text: ":first-child",
              isCorrect: true,
              description: "The :first-child pseudo-class targets the first child element of a parent."
            },
            {
              id: "15cd29b2-b0f2-4e3e-872f-ef6b0c1c4501",
              text: ":hover",
              isCorrect: false,
              description: ":hover targets an element when it's being hovered over."
            },
            {
              id: "a4cc8d9f-70a1-4db9-9e5a-3c37574eb3e0",
              text: ":active",
              isCorrect: false,
              description: ":active targets an element, like a button, during the active state (e.g., when it's pressed)."
            },
            {
              id: "9939071f-034b-41de-8cb8-40a1b3a9e69b",
              text: ":visited",
              isCorrect: false,
              description: ":visited targets links that have been visited."
            }
          ]
        },
        {
          id: "0108a41e-f543-4e53-8d6a-e393e31f820b",
          text: "Which HTML5 element is specifically designed to contain navigation links?",
          difficulty: "hard",
          answers: [
            {
              id: "e789da91-91e9-4d60-8be0-16bb82e6b645",
              text: "<sidebar>",
              isCorrect: false,
              description: "There is no standard <sidebar> element in HTML."
            },
            {
              id: "ce439a6c-e37f-48fc-b73e-181a3ef78438",
              text: "<navbar>",
              isCorrect: false,
              description: "While navbar is commonly used as a term in certain frameworks (e.g., Bootstrap), there's no <navbar> tag in standard HTML."
            },
            {
              id: "37ef381d-2278-4a31-8f70-3fae7dc60ae9",
              text: "<menu>",
              isCorrect: false,
              description: "<menu> isn't specifically for navigation links."
            },
            {
              id: "f2a7ec98-3950-4ba6-9b1d-17045970a631",
              text: "<nav>",
              isCorrect: true,
              description: "The <nav> element in HTML5 is specifically meant to enclose navigation links."
            }
          ]
        }, {
          "id": "019f163b-90de-46f0-9b04-8f914e6c25b9",
          "text": "What does the 'Box Model' in CSS refer to?",
          "difficulty": "hard",
          "answers": [
            {
              "id": "6f8b076b-cc23-4ec3-8476-1cd05f49d7d2",
              "text": "A technique for 3D transformations.",
              "isCorrect": false,
              "description": "3D transformations in CSS are achieved using different techniques, not the Box Model."
            },
            {
              "id": "3c164d57-f4c4-4d6f-95bc-bfb185a1400f",
              "text": "The packaging of CSS files into boxes.",
              "isCorrect": false,
              "description": "CSS files aren't packaged into boxes."
            },
            {
              "id": "74166d01-76c3-4ebe-ae80-744b4ed813e5",
              "text": "A combination of padding, border, margin, and the actual content.",
              "isCorrect": true,
              "description": "The CSS Box Model describes the design and layout by placing elements in a box with specific properties like padding, border, and margin."
            },
            {
              "id": "31f27104-9bdf-41c9-8bea-e6fc7fb8f4e5",
              "text": "The grid system used in modern layouts.",
              "isCorrect": false,
              "description": "While the grid system is vital for layouts, the Box Model specifically deals with the design and layout of individual elements."
            }
          ]
        },
        {
          "id": "d1d6aa20-dce3-469e-9dc7-963e0b0d8c25",
          "text": "In a flexbox container, which property is used to align the items vertically (assuming a row-direction)?",
          "difficulty": "hard",
          "answers": [
            {
              "id": "f227142b-6bda-46ff-af03-bd61fc167acc",
              "text": "align-horizontal",
              "isCorrect": false,
              "description": "`align-horizontal` is not a standard CSS property."
            },
            {
              "id": "2bf7192e-6e80-4d56-9f43-49515ae3d5ee",
              "text": "align-items",
              "isCorrect": true,
              "description": "In a flexbox container, when you want to align items vertically in the case of a row direction, you'd use `align-items`."
            },
            {
              "id": "5ac3aa0d-3a83-47e5-87a9-b1e13b6ab67d",
              "text": "justify-content",
              "isCorrect": false,
              "description": "`justify-content` is used to align flex items along the main axis (horizontally in the case of a row direction)."
            },
            {
              "id": "b48ab00b-9d4b-4636-8dbf-c24b922d2fe1",
              "text": "vertical-align",
              "isCorrect": false,
              "description": "`vertical-align` is used with inline-level and table-cell elements, not with flex items."
            }
          ]
        }


      ]
    }

    return quizId === data.id ? Promise.resolve(data) : Promise.reject("unknown id")
  }

  async fetchQuizAttemptDataByAttemptId(attemptId: String): Promise<AttemptDTO> {

    const data: AttemptDTO = {
      id: ATTEMPT_ID,
      attempt: 1,
      quizId: QUIZ_ID,

      course: {
        id: "32ca6d6e-5feb-494c-8950-c3a0c76f4b3f",
        title: 'Frontend Development',
      },

      courseStep: {
        id: "c7486278-a50c-4629-89b9-cc1c74d7a538",
        title: 'The essentials of the Web',
      },

      questions: [{
        id: "71cfcec5-0af5-44af-b159-6e0be8afc098",
        text: "What is HTML used for?",
        difficulty: "easy",
        answers: [
          {
            id: "f5199684-de22-4a0f-ab54-da45b6aa1e5a",
            text: "Styling the website",
            isCorrect: false,
            isSelected: true,
            description: "Styling a website is primarily done using CSS, which helps in determining colors, font sizes, positioning, and other visual elements.",
          }, {
            id: "afd4e674-fe5b-4e9d-84bc-7fc843205043",
            text: "Describing the structure of a webpage",
            isCorrect: true,
            isSelected: false,
            description: "HTML stands for HyperText Markup Language and it provides the basic structure to a webpage. Through HTML, the browser understands headings, paragraphs, links, and other content types."
          }, {
            id: "a8df877e-bb6f-4c2d-8401-bab33115ee18",
            text: "Creating animations for a webpage",
            isCorrect: false,
            isSelected: false,
            description: "While animations can be added to a webpage, they are typically achieved using both CSS and JavaScript, depending on the complexity. HTML itself isn't used for animations."
          }, {
            id: "eaadae67-508c-4d8f-98ce-d3e94161ab28",
            text: "Accessing web databases",
            isCorrect: false,
            isSelected: false,
            description: "Accessing databases is generally the realm of backend languages and APIs, not directly through HTML."
          },
        ]
      }, {
        id: "21a42207-9255-4612-8674-dc026c2609f2",
        text: "Which of the following is NOT an HTML element?",
        difficulty: "easy",
        answers: [
          {
            id: "fb97d7f0-e7ad-4a01-84a9-745c4d24b1b9",
            text: "<heading>",
            isCorrect: false,
            isSelected: false,
            description: "The term <heading> is not used as an HTML element. Instead, we have heading tags that range from <h1> to <h6> to denote headings of different levels."
          },
          {
            id: "a13f4915-eb42-4c71-b00e-4115042f5043",
            text: "<paragraph>",
            isCorrect: false,
            isSelected: false,
            description: "<paragraph> is not the correct HTML element for creating paragraphs. The right tag for a paragraph in HTML is <p>."
          },
          {
            id: "6724a3e9-202b-4f63-a415-31245f87fc0c",
            text: "<list>",
            isCorrect: false,
            isSelected: false,
            description: "While you can create lists in HTML, the tag <list> doesn't exist. For lists, we use <ul> for unordered lists and <ol> for ordered lists."
          },
          {
            id: "3371a66a-ec9a-489d-b4c0-5323d0ab74a5",
            text: "None of the above",
            isCorrect: true,
            isSelected: true,
            description: "All of the provided options are not standard HTML elements."
          }
        ]
      },
        {
          id: "ecdf8c56-35e5-48a3-bf1a-351f147fd5cc",
          text: "Which language is primarily used to determine the visual style of a website?",
          difficulty: "easy",
          answers: [
            {
              id: "182ec5a8-e3b7-4e55-a2d4-8937ddf77eef",
              text: "JavaScript",
              isCorrect: false,
              isSelected: false,
              description: "JavaScript is mainly used for adding functionality and interactivity to web pages."
            },
            {
              id: "ebe76e3d-45a6-4e63-971d-05655f95ee57",
              text: "Python",
              isCorrect: false,
              isSelected: false,
              description: "Python is a programming language that's often used for backend web development, data analysis, artificial intelligence, and more."
            },
            {
              id: "e2ad243a-a84b-44c3-8fe6-9dbfb5e3c749",
              text: "HTML",
              isCorrect: false,
              isSelected: false,
              description: "HTML is the markup language used to structure content on the web. While it can carry some style attributes, CSS is the primary tool for styling."
            },
            {
              id: "9fbb4846-8351-4057-8cf0-9dc1af284c69",
              text: "CSS",
              isCorrect: true,
              isSelected: true,
              description: "CSS (Cascading Style Sheets) is the language specifically designed to style web content. It defines how elements should appear in terms of layout, colors, fonts, and more."
            }
          ]
        }, {
          id: "7c0e7c9c-7a5f-4fa0-bc3e-57c5f8d15d8f",
          text: "What is the primary purpose of visual design in web development?",
          difficulty: "easy",
          answers: [
            {
              id: "d08ac14a-2e92-42ca-8ed4-eee520caa8b5",
              text: "Accelerating website speed",
              isCorrect: false,
              isSelected: false,
              description: "While a well-designed website can improve user experience, the speed of a website is more about optimization, efficient coding, and hosting solutions."
            },
            {
              id: "605d727b-9a7e-4e13-8437-db664ce84afe",
              text: "Ensuring website security",
              isCorrect: false,
              isSelected: false,
              description: "Website security is crucial, but visual design isn't directly related to it. Security measures involve both frontend and backend strategies, encryptions, and more."
            },
            {
              id: "f72d1fee-7461-4e84-a56a-001a015ffa40",
              text: "Delivering a unique message and enhancing user experience",
              isCorrect: true,
              isSelected: true,
              description: "Visual design uses typography, color, graphics, and more to help convey a unique message and provide a memorable user experience."
            },
            {
              id: "71dac8d4-5bea-4efa-b856-af7070739555",
              text: "Backing up website data",
              isCorrect: false,
              isSelected: false,
              description: "Backing up website data is an administrative task and not a direct responsibility of visual design."
            }
          ]
        }, {
          id: "d56c77b9-ae12-4f01-b7c3-607d5c54cdca",
          text: "Why is web accessibility important?",
          difficulty: "easy",
          answers: [
            {
              id: "03ef7582-320a-4364-94da-e978e69955ef",
              text: "It ensures that websites look the same on all devices.",
              isCorrect: false,
              isSelected: false,
              description: "While a consistent appearance across devices is essential, that's more about responsive design than accessibility."
            },
            {
              id: "1919a4b9-6ee1-44e3-8876-12f2db06be45",
              text: "It makes websites load faster.",
              isCorrect: false,
              isSelected: false,
              description: "Web accessibility doesn't necessarily mean faster load times. Load times depend on optimization techniques, server speeds, and more."
            },
            {
              id: "14a99e8a-d57f-45d2-8a9d-6d6d8d6a74a5",
              text: "It guarantees that websites can be understood and navigated by everyone, including people with disabilities.",
              isCorrect: true,
              isSelected: true,
              description: "Accessibility ensures that web content and user interfaces are accessible to all users, regardless of physical or cognitive disabilities, ensuring inclusivity on the web."
            },
            {
              id: "14d19e0a-c1e7-47e7-950e-f4c020702b8d",
              text: "It ensures higher search engine rankings.",
              isCorrect: false,
              isSelected: false,
              description: "While search engines do value accessible websites, the primary goal of web accessibility is inclusiveness, not SEO."
            }
          ]
        }, {
          id: "93521f64-ea8c-4f92-9174-3384c9c3a71b",
          text: "What does responsive web design ensure?",
          difficulty: "easy",
          answers: [
            {
              id: "d9f45de6-4cc8-42ee-ae71-d906a272dfaa",
              text: "Faster loading speed on mobile devices",
              isCorrect: false,
              isSelected: false,
              description: "Responsive design doesn't inherently speed up website loading times. Its main goal is adaptability."
            },
            {
              id: "9243f14c-d696-447b-a3d1-5e290c39984f",
              text: "Higher security against web threats",
              isCorrect: false,
              isSelected: false,
              description: "Responsive design focuses on layout adaptability, not security."
            },
            {
              id: "39d17ba1-c57a-49e7-9840-b69560b1891a",
              text: "Flexibility in website appearance according to device size and orientation",
              isCorrect: true,
              isSelected: true,
              description: "Responsive web design allows websites to adjust and look good on devices of all sizes, whether it's a large monitor, tablet, or smartphone."
            },
            {
              id: "dd1f14fc-67e8-4e78-ae24-c62f13ebeae7",
              text: "Vibrant color schemes for websites",
              isCorrect: false,
              isSelected: false,
              description: "Color schemes are part of visual design. Responsiveness is about layout adjustments based on screen sizes."
            }
          ]
        },
        {
          id: "bcf1566a-0f20-4425-9936-6534d7cc44e7",
          text: "Which of the following is a powerful layout method introduced in CSS3?",
          difficulty: "easy",
          answers: [
            {
              id: "9c506bb7-9229-4b42-a68c-6b14e8d36740",
              text: "CSS Shapes",
              isCorrect: false,
              isSelected: false,
              description: "CSS Shapes is about wrapping content around custom paths, not about layout per se."
            },
            {
              id: "2f6c5c9b-85ef-4f60-8e68-38f61c621621",
              text: "CSS Flexbox",
              isCorrect: true,
              isSelected: true,
              description: "CSS Flexbox provides an efficient way to lay out, align, and distribute space among items in a container, even when their sizes are unknown or dynamic."
            },
            {
              id: "0ac9c5b5-4de9-4873-87fc-563b1b3e7502",
              text: "CSS Templates",
              isCorrect: false,
              isSelected: false,
              description: "There's no standard feature named 'CSS Templates'."
            },
            {
              id: "df26ab64-37d5-48f9-b29b-3c388a395c71",
              text: "CSS Fonts",
              isCorrect: false,
              isSelected: false,
              description: "CSS Fonts relates to font-face and loading custom fonts, not layouts."
            }
          ]
        }, {
          id: "83b7c94b-8e17-4c04-95ca-cf28cb3f80a9",
          text: "What does the CSS Grid enable in terms of layout design?",
          difficulty: "easy",
          answers: [
            {
              id: "f86ac66b-2315-4692-a568-1da2d4f62f5b",
              text: "It allows embedding multimedia.",
              isCorrect: false,
              isSelected: false,
              description: "While multimedia can be placed within a CSS Grid, the grid itself is not specifically for embedding multimedia."
            },
            {
              id: "f569a47f-3313-4c85-8c0e-46068977300d",
              text: "It ensures website security.",
              isCorrect: false,
              isSelected: false,
              description: "CSS Grid focuses on layout and has nothing to do with security."
            },
            {
              id: "a0c69a6d-0c50-4b3a-9b7d-c7e2a70fb046",
              text: "It enables easy creation of flexible, two-dimensional layouts.",
              isCorrect: true,
              isSelected: true,
              description: "CSS Grid provides a method for placing elements within columns and rows, making complex responsive layouts more manageable."
            },
            {
              id: "7d7c08fa-5c9a-4a83-8a50-e8f14f4af421",
              text: "It automates browser compatibility.",
              isCorrect: false,
              isSelected: false,
              description: "Browser compatibility depends on various factors. While Grid is supported in many modern browsers, its use doesn't 'automate' compatibility."
            }
          ]
        },
        {
          id: "4e856cb9-8542-4bf6-a390-67cfe656bc4c",
          text: "Which of the following elements can describe text as a heading in HTML?",
          difficulty: "easy",
          answers: [
            {
              id: "f9fa1c7a-2090-45f0-9bd2-0b86b015aa61",
              text: "<header>",
              isCorrect: false,
              isSelected: false,
              description: "The <header> element typically contains introductory content or navigation links and not used as a standard heading."
            },
            {
              id: "a9788b44-1907-4d6a-99af-175c4af699b1",
              text: "<heading>",
              isCorrect: false,
              isSelected: false,
              description: "There is no standard <heading> tag in HTML."
            },
            {
              id: "5a604663-bd84-4550-b50f-c71a2606303d",
              text: "<h1>",
              isCorrect: true,
              isSelected: true,
              description: "The <h1> tag in HTML is used to represent the top-level heading, making it the most important among the heading tags ranging from <h1> to <h6>."
            },
            {
              id: "60a175d3-60f5-465f-879e-b36d8e11e417",
              text: "<top>",
              isCorrect: false,
              isSelected: false,
              description: "The <top> tag doesn't exist in standard HTML."
            }
          ]
        },

        // advanced
        {
          id: "6e83a010-0f61-42e2-9ea1-ba0fb75f5595",
          text: "When you want to make a list of items without any specific order, which HTML tag would you use?",
          difficulty: "medium",
          answers: [
            {
              id: "0c92b827-8f9a-4569-a671-b62180a623c3",
              text: "<ol>",
              isCorrect: false,
              isSelected: false,
              description: "The <ol> tag is used for ordered lists, where the order of items is important."
            },
            {
              id: "8896b43d-ff1b-4070-a04d-7a7f36917c95",
              text: "<dl>",
              isCorrect: false,
              isSelected: false,
              description: "The <dl> tag is for is description lists and isn't typically used for general lists."
            },
            {
              id: "0640e444-2af2-4073-a501-26a05e19504d",
              text: "<ul>",
              isCorrect: true,
              isSelected: true,
              description: "The <ul> tag stands for unordered list, which is used for lists where order doesn't matter."
            },
            {
              id: "6097e45a-c261-49e2-af42-0738a222bef1",
              text: "<list>",
              isCorrect: false,
              isSelected: false,
              description: "There is no standard <list> tag in HTML."
            }
          ]
        }, {
          id: "7635a62b-851c-40c0-ae24-65a10e5067f8",
          text: "Considering the 'Cascading' in Cascading Style Sheets (CSS), which of the following statements is true?",
          difficulty: "medium",
          answers: [
            {
              id: "f42a1b38-d270-4bf5-8fd3-c5540048c818",
              text: "External stylesheets have a higher priority than inline styles.",
              isCorrect: false,
              isSelected: false,
              description: "Inline styles have a higher priority than external stylesheets."
            },
            {
              id: "e9201478-20f5-4052-af95-4c0c7fdd9001",
              text: "The last rule defined overrides any previous, conflicting rules.",
              isCorrect: true,
              isSelected: true,
              description: "Cascading means that the order of CSS rules matters. If two rules conflict, the latter rule will take precedence, given they have the same specificity."
            },
            {
              id: "26e5c620-6b30-41c6-9458-c92658ee099e",
              text: "All styles have an equal weight, regardless of where they are defined.",
              isCorrect: false,
              isSelected: false,
              description: "Styles do not have equal weight; their application is determined by specificity and order."
            },
            {
              id: "be64b962-c0a2-4f36-9d99-37ca9d62f410",
              text: "Inline styles only apply to JavaScript-generated content.",
              isCorrect: false,
              isSelected: false,
              description: "Inline styles can be applied directly to any HTML element, not just JavaScript-generated content."
            }
          ]
        }, {
          "id": "9a34bb89-58a8-4b65-992f-2371e5ee45db",
          "text": "In responsive design, what does the 'viewport' refer to?",
          "difficulty": "medium",
          "answers": [
            {
              "id": "e953d642-df57-4122-a891-a4fcb3af45fc",
              "text": "The visible area of a webpage that the user can interact with.",
              "isCorrect": true,
              "isSelected": true,
              "description": "The viewport is the user's visible area of a web page. It varies with the device, and it can be controlled using the <meta> viewport element."
            },
            {
              "id": "0d4d154c-4e46-459a-a16c-4b0e18e0995e",
              "text": "The server's perspective on how to serve content.",
              "isCorrect": false,
              "isSelected": false,
              "description": "The server doesn't have a 'perspective'; it serves content based on requests."
            },
            {
              "id": "be0eeead-9146-4bfa-98ea-425393077180",
              "text": "The total area of a website, including off-screen content.",
              "isCorrect": false,
              "isSelected": false,
              "description": "The viewport only concerns what's currently visible and does not include off-screen content."
            },
            {
              "id": "78d66fa7-6739-42c6-b2d9-dc9b593072b8",
              "text": "The framework used to build mobile-responsive designs.",
              "isCorrect": false,
              "isSelected": false,
              "description": "While certain frameworks can help with responsive design, the term 'viewport' does not pertain to any specific framework."
            }
          ]
        }, {
          "id": "6ff92df4-05b2-42bc-9c0b-905957843d6b",
          "text": "Given the growth of mobile web browsing, why is Flexbox considered an important tool in responsive design?",
          "difficulty": "medium",
          "answers": [
            {
              "id": "6e7c401a-9c8f-46a7-8ab3-c2be1a9a8f9c",
              "text": "It enables developers to use less JavaScript.",
              "isCorrect": false,
              "isSelected": false,
              "description": "While Flexbox can reduce the need for some layout-related JavaScript, its main purpose isn't about reducing JavaScript usage."
            },
            {
              "id": "18cf46b7-5c95-4549-a9ce-b2aa579a7207",
              "text": "It allows more vibrant color schemes.",
              "isCorrect": false,
              "isSelected": false,
              "description": "Flexbox is about layout, not color schemes."
            },
            {
              "id": "81145ae9-0592-4a8b-a0ee-5a7e7ec04359",
              "text": "Flexbox layouts adapt to different screen sizes without requiring pixel-based dimensions.",
              "isCorrect": true,
              "isSelected": true,
              "description": "Flexbox allows for flexible layouts that can adapt to various screen sizes and orientations, making it easier to create responsive designs without relying heavily on fixed dimensions."
            },
            {
              "id": "56b400e1-c5f6-46e2-aa14-0fcee057e34a",
              "text": "It's a plugin that makes websites mobile-friendly automatically.",
              "isCorrect": false,
              "isSelected": false,
              "description": "Flexbox is not a plugin; it's a CSS layout model."
            }
          ]
        }, {
          "id": "2fb15eb6-0f15-422a-9a67-8aa7d7a78336",
          "text": "In the context of CSS Grid, what does the 'fr' unit stand for?",
          "difficulty": "medium",
          "answers": [
            {
              "id": "f28ea0d2-f0f4-4393-8a17-502c6cc69bf8",
              "text": "Frame",
              "isCorrect": false,
              "isSelected": false,
              "description": "While 'frame' sounds related to grids or layouts, it's not what 'fr' represents."
            },
            {
              "id": "c3aa9f4d-0b53-421b-98e2-2520a1f66db7",
              "text": "Fraction",
              "isCorrect": true,
              "isSelected": true,
              "description": "The 'fr' unit in CSS Grid stands for 'fraction'.It represents a fraction of the available space in the grid container."
            },
            {
              "id": "dcf8a69e-9a21-4da8-9f80-cf322f5372b2",
              "text": "Frequency",
              "isCorrect": false,
              "isSelected": false,
              "description": "Frequency is not a unit of measurement in CSS Grid."
            },
            {
              "id": "c4e6e9b0-e530-4b64-91b2-39e40fdda333",
              "text": "Format",
              "isCorrect": false,
              "isSelected": false,
              "description": "Format doesn't correlate with the purpose of 'fr' in grid layouts."
            }
          ]
        },

        // hard
        {
          id: "e3e70682-c209-4cac-629f-6fbed82c07cd",
          text: "Which of the following best describes 'Semantic HTML'?",
          difficulty: "hard",
          answers: [
            {
              id: "bea4e168-d12f-4bcc-9f35-dc9f1a9df8d9",
              text: "HTML that boosts the website's SEO",
              isCorrect: false,
              isSelected: false,
              description: "While semantic HTML can positively influence SEO, its primary purpose isn't solely for boosting SEO."
            },
            {
              id: "f49b9dab-4e0a-4a04-9cfd-af3f8fc0f3b1",
              text: "HTML with embedded multimedia elements",
              isCorrect: false,
              isSelected: false,
              description: "Embedding multimedia elements doesn't make HTML semantic."
            },
            {
              id: "b9d4bb3a-5869-4320-a2c1-d8e0d7a9e4dd",
              text: "HTML where elements are used according to their meaning, not just their appearance",
              isCorrect: true,
              isSelected: true,
              description: "Semantic HTML involves using HTML elements for their given meaning, which helps in improving web accessibility, making websites more readable for both users and machines."
            },
            {
              id: "1eac9ca9-4813-4060-8deb-f387e2fe9a2e",
              text: "HTML that includes animations and dynamic content",
              isCorrect: false,
              isSelected: false,
              description: "Animations and dynamic content are unrelated to the semantics of an HTML document."
            }
          ]
        }, {
          id: "76b893dd-e5db-4867-9a3f-8872e7d07d70",
          text: "Which property would you use in CSS if you wanted to set the space between the content of an element and its border?",
          difficulty: "hard",
          answers: [
            {
              id: "84f8f61f-9bb7-4c1b-a59b-252bc05fb063",
              text: "margin",
              isCorrect: false,
              isSelected: false,
              description: "margin is the space outside the border, between the element and its surrounding elements."
            },
            {
              id: "88cd1c82-bec7-4032-bbb4-f25c36a8740f",
              text: "border",
              isCorrect: false,
              isSelected: false,
              description: "border sets the border around an element but doesn't deal with spacing."
            },
            {
              id: "1c782898-3c05-4dd6-8cb9-9308a2cf0905",
              text: "spacing",
              isCorrect: false,
              isSelected: false,
              description: "spacing is not a standard CSS property."
            },
            {
              id: "f7658b04-07b1-40ef-9cd4-8e3eb70de37f",
              text: "padding",
              isCorrect: true,
              isSelected: true,
              description: "Padding in CSS refers to the space between the content of an element and its border. It's an inner spacing."
            }
          ]
        },
        {
          id: "d175e7e0-b869-4a46-963a-e978564dfdc0",
          text: "Which of the following pseudo-classes targets elements based on their position in a parent element?",
          difficulty: "hard",
          answers: [
            {
              id: "f7ae7e5c-f6ef-48ea-b34b-17a275e8c430",
              text: ":first-child",
              isCorrect: true,
              isSelected: true,
              description: "The :first-child pseudo-class targets the first child element of a parent."
            },
            {
              id: "15cd29b2-b0f2-4e3e-872f-ef6b0c1c4501",
              text: ":hover",
              isCorrect: false,
              isSelected: false,
              description: ":hover targets an element when it's being hovered over."
            },
            {
              id: "a4cc8d9f-70a1-4db9-9e5a-3c37574eb3e0",
              text: ":active",
              isCorrect: false,
              isSelected: false,
              description: ":active targets an element, like a button, during the active state (e.g., when it's pressed)."
            },
            {
              id: "9939071f-034b-41de-8cb8-40a1b3a9e69b",
              text: ":visited",
              isCorrect: false,
              isSelected: false,
              description: ":visited targets links that have been visited."
            }
          ]
        },
        {
          id: "0108a41e-f543-4e53-8d6a-e393e31f820b",
          text: "Which HTML5 element is specifically designed to contain navigation links?",
          difficulty: "hard",
          answers: [
            {
              id: "e789da91-91e9-4d60-8be0-16bb82e6b645",
              text: "<sidebar>",
              isCorrect: false,
              isSelected: false,
              description: "There is no standard <sidebar> element in HTML."
            },
            {
              id: "ce439a6c-e37f-48fc-b73e-181a3ef78438",
              text: "<navbar>",
              isCorrect: false,
              isSelected: false,
              description: "While navbar is commonly used as a term in certain frameworks (e.g., Bootstrap), there's no <navbar> tag in standard HTML."
            },
            {
              id: "37ef381d-2278-4a31-8f70-3fae7dc60ae9",
              text: "<menu>",
              isCorrect: false,
              isSelected: false,
              description: "<menu> isn't specifically for navigation links."
            },
            {
              id: "f2a7ec98-3950-4ba6-9b1d-17045970a631",
              text: "<nav>",
              isCorrect: true,
              isSelected: true,
              description: "The <nav> element in HTML5 is specifically meant to enclose navigation links."
            }
          ]
        }, {
          id: "019f163b-90de-46f0-9b04-8f914e6c25b9",
          text: "What does the 'Box Model' in CSS refer to?",
          difficulty: "hard",
          answers: [
            {
              id: "6f8b076b-cc23-4ec3-8476-1cd05f49d7d2",
              text: "A technique for 3D transformations.",
              isCorrect: false,
              isSelected: false,
              "description": "3D transformations in CSS are achieved using different techniques, not the Box Model."
            },
            {
              id: "3c164d57-f4c4-4d6f-95bc-bfb185a1400f",
              text: "The packaging of CSS files into boxes.",
              isCorrect: false,
              isSelected: false,
              description: "CSS files aren't packaged into boxes."
            },
            {
              id: "74166d01-76c3-4ebe-ae80-744b4ed813e5",
              text: "A combination of padding, border, margin, and the actual content.",
              isCorrect: true,
              isSelected: true,
              description: "The CSS Box Model describes the design and layout by placing elements in a box with specific properties like padding, border, and margin."
            },
            {
              id: "31f27104-9bdf-41c9-8bea-e6fc7fb8f4e5",
              text: "The grid system used in modern layouts.",
              isCorrect: false,
              isSelected: false,
              "description": "While the grid system is vital for layouts, the Box Model specifically deals with the design and layout of individual elements."
            }
          ]
        },
        {
          id: "d1d6aa20-dce3-469e-9dc7-963e0b0d8c25",
          text: "In a flexbox container, which property is used to align the items vertically (assuming a row-direction)?",
          difficulty: "hard",
          answers: [
            {
              id: "f227142b-6bda-46ff-af03-bd61fc167acc",
              text: "align-horizontal",
              isCorrect: false,
              isSelected: false,
              description: "`align-horizontal` is not a standard CSS property."
            },
            {
              id: "2bf7192e-6e80-4d56-9f43-49515ae3d5ee",
              text: "align-items",
              isCorrect: true,
              isSelected: true,
              description: "In a flexbox container, when you want to align items vertically in the case of a row direction, you'd use `align-items`."
            },
            {
              id: "5ac3aa0d-3a83-47e5-87a9-b1e13b6ab67d",
              text: "justify-content",
              isCorrect: false,
              isSelected: false,
              description: "`justify-content` is used to align flex items along the main axis (horizontally in the case of a row direction)."
            },
            {
              id: "b48ab00b-9d4b-4636-8dbf-c24b922d2fe1",
              text: "vertical-align",
              isCorrect: false,
              isSelected: false,
              description: "`vertical-align` is used with inline-level and table-cell elements, not with flex items."
            }
          ]
        }
      ]
    }

    return attemptId === data.id ? Promise.resolve(data) : Promise.reject("unknown id")
  }

}