import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="relative h-[85vh] min-h-[32rem]">
        <Image
          src="/images/profile.jpg"
          alt="Lt. Col. Samuel Clifton Pruett"
          fill
          className="object-cover object-center sm:object-[center_18%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-900/90" />
        <div className="absolute inset-x-0 bottom-8 flex items-center justify-center text-center">
          <div className="space-y-2 text-white backdrop-blur-sm bg-black/20 rounded-lg px-4 py-3 sm:px-6 sm:py-4">
            <h1 className="font-oswald tracking-wide uppercase drop-shadow-lg">
              <span className="block text-base sm:text-lg md:text-xl font-light drop-shadow-md">
                Lt. Col.
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-wide drop-shadow-lg">
                Samuel Clifton Pruett
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-light tracking-wide opacity-95 drop-shadow-md">
              1923 &mdash; 2010
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          <section className="Letter bg-amber-50 border-l-4 border-amber-300 rounded-r-lg p-6 sm:p-8 shadow-sm">
            <div className="max-w-3xl space-y-6">
              <p className="text-amber-800 text-sm font-medium tracking-wide uppercase">
                April 15, 2002
              </p>

              <blockquote className="italic text-lg sm:text-xl leading-relaxed text-gray-700 border-l-2 border-amber-200 pl-6">
                <p>
                  About five years ago Craig asked your mom and me to write our
                  autobiography beginning as far back as we could remember. Mom
                  wrote hers and passed it on to Craig. I wrote mine but never
                  completed it, and I&rsquo;m not sure that I ever will. At least this
                  autobiography will give you some idea about my life in the
                  good old days. Hope you enjoy reading it.
                </p>
              </blockquote>

              <p className="text-right text-gray-600 font-medium">
                — Love, Dad
              </p>
            </div>
          </section>

          <section className="Autobiography [&>div>p]:text-lg [&>div>p]:lg:text-xl [&>div>p]:xl:text-2xl [&>div>p]:leading-relaxed [&>div>p]:text-gray-700 [&>div>p]:mb-6 [&>div>p]:font-serif [&>div>p]:antialiased [&>div>strong]:font-bold [&>div>strong]:text-gray-800 [&>div>em]:italic">
            <div className="prose prose-lg lg:prose-xl xl:prose-2xl max-w-none">
              <h2
                id="a-short-genealogy"
                className="font-oswald text-2xl sm:text-3xl font-normal text-gray-800 border-b-2 border-gray-200 pb-3 mb-8"
              >
                A Short Genealogy
              </h2>

              <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-700 mb-6 font-serif antialiased">
                Before writing about myself, I thought it would be more
                appropriate if you knew a little more about my genealogy.
              </p>

              <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-700 mb-6 font-serif antialiased">
                My Mother, Ruth Horner Pruett, a.k.a. Mom, was born in Essex,
                Connecticut, on October 17, 1892. She died in the Paul Kimball
                Hospital in Lakewood, N.J. on July 18, 1976, from ovarian cancer
                — just six weeks following my Dad&rsquo;s death. Her mother, Minnie
                May Horner, was born in Naughrightville, N.J. in 1867 and died
                in our Teaneck home around 1950. Mom&rsquo;s father, William E.
                Horner, was born in Essex, Conn. in 1868. I have no record of
                when or where he died. He worked as a conductor on a railroad.
                There were no other children.
              </p>

              <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-700 mb-6 font-serif antialiased">
                My Dad, Samuel Clifton Pruett, Sr., was born on September 1,
                1895 in Baltimore, Md. and died on May 27, 1976 from a brain
                hemorrhage at the Point Plesant Hospital in N.J. His mother, Ida
                Virginia Pruett, was born on February 28, 1852 and his dad,
                George Washington Pruett, was born on August 2, 1844. I have no
                records of where they were born, or lived, but it is presumed
                both places were in the Baltimore area. Dad was the youngest of
                seven children — five girls and two boys. After graduating from
                high school, he attended Baltimore Polytechnical School and got
                a degree in mechanical engineering. His father&rsquo;s occupation is
                unknown.
              </p>

              <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-700 mb-6 font-serif antialiased">
                I have no recollection of how or where Mom and Dad met, but I
                believe it must have been in the Elizabeth, N.J. area. They were
                married in the Second Presbyterian Church in Elizabeth on
                November 16, 1921. Mom was a telephone operator prior to
                marriage and lived in Elizabeth with her mother. Dad, after
                leaving Baltimore around 1914, lived I suspect, in Elizabeth
                too. He commuted to New York City where he worked for the
                American Agricultural Chemical Co. - a manufacturer of chemical
                fertilizer. I do recall that, prior to meeting Dad, Mom was
                engaged to a man named Ben Price who, I believe, served in WWI
                as a medic. Dad had a deferment because he worked for a company
                that was closely allied to the food industry - which served not
                only our own country&rsquo;s needs but also the needs of our European
                allies. Obviously Mom was stricken with the Pruett charms !!!
                and returned her engagement ring to Ben. I do not recall any
                love interest Dad had other than Mom.
              </p>

              <p>
                Although they loved one another dearly, every once in a while
                there would be a rather heated argument, usually over nothing
                very important. Dad had a unique way of simmering Mom down a
                bit. He would approach her face to face, grab her in a bear hug,
                and jounce her up and down a few times until she started
                laughing at the sillyness of it all. Then the argument was over.
              </p>

              <p>
                The law of opposites attracting was certainly true in Mom and
                Dad&rsquo;s case. Dad was soft spoken, loving, and rather easy going.
                Mom could be quick tempered at times but very compassionate and
                affectionate. You always knew where you stood with Mom. She told
                it like it was. I remember that during the depression we often
                had beggars come to the rear door of our house in Teaneck asking
                for food. I never recall Mom ever refusing to give them
                something to eat. And when her mother and her mother&rsquo;s sister,
                Aunt Nell, were down and out Mom had them live with us for a few
                years. Quite a tribute to Dad&rsquo;s compassion too!
              </p>

              <p>
                Mom loved to tell a joke - usually on herself. One was about the
                time she ordered a pound of syracuse from the butcher. He
                scratched his head and replied, &ldquo;Sorry Mam, we don&rsquo;t have any
                syracuse, but we do have some cincinnatti&rdquo;. Mom agreed that&rsquo;s
                what she wanted and said to the butcher, &ldquo;Well you know they
                both begin with a &lsquo;C&rsquo;&rdquo;.
              </p>

              <p>
                Both Mom and Dad were active in the Dutch Reformed Church we
                attended in Teaneck. Dad was the treasurer at least a couple of
                times. It so happened that each time he was elected as treasurer
                he bought a new car. He took a lot of ribbing on that
                coincidence. He also was on a church building expansion
                committee and made the design plans for it. Mom taught Sunday
                School for many years. One time the minister brought in,
                unannounced, another minister to observe the class Mom was
                teaching. She got so nervous that she finally told them to
                leave. Mom contributed many home made pies, cakes and cookies to
                the many bake sales and annual bazaars the church sponsored to
                raise money - especially during the depression era.
              </p>

              <p>
                Their social life was wholesome if not spectacular. On the
                weekends they often played bridge with neighbors and friends. A
                couple of times a year the three of us would go to New York City
                to see a play or to Radio City Music Hall to see a show.
                Afterwards we&rsquo;d usually have a good Italian spaghetti dinner at
                a Caruso&rsquo;s restaurant (no longer in business). Of course we
                often went to see a show at one of the two movie houses in
                Hackensack.
              </p>

              <h2
                id="1923-to-1929"
                className="font-oswald text-2xl sm:text-3xl font-normal text-gray-800 border-b-2 border-gray-200 pb-3 mb-8 mt-12"
              >
                1923 to 1929
              </h2>

              <p>
                I was born on February 13, 1923, in a hospital in New York City
                by C—section. Mom could not have any more children. At that time
                we lived in an apartment in Weehawken, N.J. until 1925 when we
                moved to 852 Garrison Avenue in Teaneck. It was a dirt street
                then and remained so for a year or two. The house was new — had
                two medium size bedrooms and one small one plus a bathroom all
                on the second floor. The first floor had a living room, dining
                room, parlor, and kitchen. There was no garage until the late
                20&rsquo;s when Dad built one himself plus a two strip concrete
                driveway. The neighborhood had many different nationalities
                represented - Irish, Italian, Russian, Norwegian, etc. With only
                a few exceptions, we all seemed to get along together. The
                Italian family living behind our house kept a cow in their back
                yard for a few years. It was a rather rural setting.
              </p>

              <p>
                We kept food in an ice box. Milk, bread, eggs, butter and
                pasteries were delivered by horse drawn wagons. The other
                staples were purchased at stores on Cedar Lane, a block and a
                half from our house. I still remember Mom listening to a crystal
                set radio, with ear phones of course, while she was ironing in
                the kitchen. Speaking of radios - when we finally purchased a
                conventional one the &ldquo;gang,&rdquo; about six neighborhood boys, would
                take turns at one another&rsquo;s home and listen to such programs as
                Buck Rogers, Jack Armstrong, Dick Tracy and Little Orphan Annie.
                How we did look forward to listening to an hour of those serials
                just before dinner — especially in the winter time when it was
                cold and dark outside.
              </p>

              <p>
                Although my parents were proud of their one and only child, Mom,
                on many occasions, was rather reluctant to show me off when she
                was wheeling me down the street in my carriage. The reason was
                because between five months and five years of age, at times, I
                would break out with eczema and and my face would be covered
                with all kinds of different colored salves. I still remember Mom
                and Dad fastening corrugated cardboard sleeves around my elbows
                so that I couldn&rsquo;t bend my arms and scratch my face while
                sleeping. That wasn&rsquo;t the best solution because I would then rub
                my face in the pillows until they were bloody.
              </p>

              <figure className="my-8 text-center">
                <a href="/images/child.jpg" target="_blank">
                  <Image
                    src="/images/child.jpg"
                    alt="Young Samuel Clifton Pruett as a child"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-full h-auto"
                  />
                </a>
              </figure>

              <p>
                Mom waited until I was six and a half years old before she would
                let me go to kindergarten. She wanted me to have all the fresh
                air and sunshine I could get before being cooped up in a school
                room. I remember the first day of kindergarten because I cried
                my heart out.
              </p>

              <h2
                id="1930-to-1940"
                className="font-oswald text-2xl sm:text-3xl font-normal text-gray-800 border-b-2 border-gray-200 pb-3 mb-8 mt-12"
              >
                1930 to 1940
              </h2>

              <p>
                Of course the depression was in full swing in the early 30&rsquo;s.
                Dad&rsquo;s job with American Agricultural Chemical Co., the only
                company he ever worked for, was, at times, a little uncertain.
                But we managed quite well especially when you consider the
                economy and the number of people who lost their jobs. One thing
                that boosted our spirits in those troubled times was &ldquo;Impy&rdquo;. He
                was the first of two of our Boston terriers. Mom sent me to the
                Teaneck train station, only about five blocks away, to pick up
                the dog. He had been shipped in a crate from someplace in New
                York state. I ran down to the station, got him out of the crate,
                and carried the little puppy in my arms all the way home. That
                dog brought much happiness to the three of us - especially after
                he was house broken.
              </p>

              <p>
                In the &rsquo;30&rsquo;s because money was rather tight, and of course no
                television, we entertained ourselves a lot. We played baseball
                in the summer and football in the fall and winter at a vacant
                lot a block from our Teaneck home. Since I was on the heavy side
                as a young boy - my friends called me &ldquo;Crisco&rdquo; (fat in the can)
                - my position playing football was usually guard or tackle. When
                my parents bought me a helmet and shoulder pads I thought I was
                invinceable. In those days playing marbles was quite popular
                too. My friends encouraged me to play with them because I
                invariably lost and, therefore, supplied them with a lot of
                marbles. My parents, grandmother and aunt always knew what to
                give me as a gift - <strong>more</strong> marbles. Every so
                often in the fall we&rsquo;d build a fire at this vacant lot and roast
                potatoes and eat them on the spot. Another very popular sport
                was street hockey using four wheel roller skates that clamped
                onto your shoes. Inline roller skates were unknown in those
                days. We&rsquo;d skate in the street with little or no traffic. Of
                course when nearby ponds were frozen over we&rsquo;d play ice hockey
                too. I enjoyed down slope skiing at the old Phelps Manor Golf
                Club located near the intersection of the eastern end of Cedar
                Lane and Teaneck Road. Unfortunately that didn&rsquo;t last long.
                Building route 4 from the George Washington bridge to Paterson
                in the early &rsquo;30&rsquo;s meant that people along the highway had an
                easy commute to New York City. Consequently a lot of people in
                the city moved out to the suburbs of Teaneck. This created a
                building boom and the golf club was purchased and replaced by
                new homes. Sleigh riding on some of the hilly streets near our
                home was also a lot of fun. To me though the best of all winter
                sports was going on the tobaggon slides at Bear Mountain in New
                York state. I spent hours climbing to the top of the slides and
                tobaggoning down the steep mountain sides in seconds.
              </p>

              <p>
                In the summer of 1933 Dad was transferred, temporarily, to
                Pierce, Florida. A great time to be there???. It was a company
                town and no longer in existance, This was the area where
                phosphate rock was mined and washed. Dad designed these huge
                washers and, I guess, he was sent there to evaluate the
                operation. None of us liked that part of the state. It was
                inland and hot, humid and full of bugs and snakes. The company
                house assigned to us was full of cock roaches. Mom stood one
                night of that nonsense. We moved to the company hotel while the
                house was fumigated. It was not much fun for me because there
                were very few boys to play with. I spent a lot of time reading
                Tom Swift books.
              </p>

              <p>
                Most of our two weeks summer vacations in this decade were spent
                in New England. In the early &rsquo;30&rsquo;s we vacationed at a farm house
                on Lake Hortonia which is about 25 miles north west of Rutland.
                They had cows, a bull of course, pigs, chickens and horses. I
                spent a lot of time in the barn with the animals. Many days Dad
                wanted to go fishing and he <strong>wanted</strong> company. I
                was the company. In those days kids did what their parents
                wanted — no questions asked. Well, I twould have much preferred
                either playing with the other kids or visiting the barn. That
                experience soured me on fishing. Other places where we spent our
                New England vacations were Vergennes, Vermont, on Lake
                Champlain, Silver Lake near North Conway, New Hampshire; Kezar
                Lake near North Fryburg, Maine; and both Long Lake and Highland
                Lake near Bridgeton, Maine. While in New Hampshire, Mom, Dad and
                I climbed to the top of Mt. Chocorua on what started out to be a
                sunny day. We no sooner got to the summit when a thunderstorm
                let loose, and we had to retreat to a shelter without even
                getting a chance to see the beautiful surrounding scenery. On
                these vacations we visited Fort Ticondaroga, went to the top of
                Mt. Washington by the coal-fired cog railroad, and visited the
                Old Man of the Mountain, Lost River, the Flume and many other
                sites.
              </p>

              <p>
                In the late &rsquo;20&rsquo;s and early &rsquo;30&rsquo;s cars did not have much space
                for luggage. Packing clothes for for three people for a two week
                stay was not easy. Mom filled a huge steamer trunk with our
                clothes and shipped it by railroad to our destination at least a
                week before our arrival date. The reverse procedure was taken on
                our return home. Of course in this era there was only a fraction
                of the number of New Jersey cars traveling in New England
                compared with what you&rsquo;ll find today. Whenever we saw a New
                Jersey license plate we&rsquo;d honk the horn and wave to the
                occupants of the other car and they would wave back.
              </p>

              <p>
                Between 1930 to 1940, we did visit with some of our many
                relatives - especially those on my Dad&rsquo;s side. We exchanged
                visits with the Treco family in Waltham, Massachusetts. Aunt Sue
                Treco was one of Dad&rsquo;s sisters. They had three children —
                Mildred, Howard and Bud, who were older than I. Quite frequently
                we drove to Baltimore to visit Uncle George, Dad&rsquo;s brother, Aunt
                Pearl and my cousins Pearl, Mary Virginia, and Lewis. One summer
                We vacationed with them on Bush River which is on the Chesepeake
                Bay. We had a lot of fun fishing and crabbing but not swimming.
                The river was full of seaweed. We also visited Uncle Bill and
                Aunt Myra Sharp and their two daughters Betty and Louise. They
                lived in Philadelphia and were relatives on my Mom&rsquo;s side.
                Beginning at age fourteen, Louise invited me to parties at her
                house. I traveled by train. She got me dates with some nice
                looking chicks. There were usually three or four couples at
                these parties and we&rsquo;d play kissing games. I liked that.
              </p>

              <p>
                In June, 1934, I graduated from the sixth grade at Emerson
                Elementary School on Elm Avenue across the street from our
                church. In September I started in the seventh grade at the new
                Teaneck Junior/Senior High School. Because of inadequate
                classroom space at this time when the population of Teaneck was
                exploding, we had, for at least a year, two school sessions —
                one from 7:30 to 12:30 and the other from 1:00 to 6:00. That
                lasted for a year or two until the school expansion was
                completed around 1936. It was tough getting up at 6:00 for a
                7:30 class.
              </p>

              <p>
                In 1935 I joined the Boy Scouts. We met at our church where we
                played games and learned the basics of scouting. I made Star
                Scout and quit. For two or three summers I camped at
                No—Be-Bo-Sco near Blairstown, New Jersey. The area was noted for
                its snake population — rattlers, copperheads, black snakes, you
                name them they were there. Another story about the Pruett Luck.
                We lived in tents with three or four other boys, and when they
                said lights out at bed time they meant it. I found that out the
                hard way. One night one of my tent mates awakened, and I heard
                him rummaging around for something. When I asked him what he was
                doing he told me he was trying to find something — in the dark
                no less. Being a compassionate soul, I turned on my flashlight
                and tried to help him. Wouldn&rsquo;t you know one of the older boy
                scouts in charge of our tent area heard the commotion and came
                to investigate. I told him the story. As a result, because I was
                the one violating the lights out rule, I had to take a pail, go
                down to the beach, about a five minute walk, fill the pail with
                sand, bring it up to the tent area and empty it. This was done
                about five times at around midnight. So much for helping your
                friends.
              </p>

              <p>
                When starting my freshman year in 1936 I chose to take the
                college (or scientific) curriculum. A language course was not
                mandatory but I chose to take french. Well that was a big
                mistake. The teacher was a southerner from New Orleans, and I
                couldn&rsquo;t understand her when she spoke english - much less
                french. I quit the course.
              </p>

              <p>
                I was not active in either sports or other school activities
                while in senior high school. My interest in sports was strictly
                as an observer. We had good football and wrestling teams, and I
                did attend many of those matches.
              </p>

              <p>
                Mom and Dad insisted that I take dancing lessons and, much to my
                surprise, I enjoyed them. A group of my high school friends and
                I took weekly lessons at a dance studio in Hackensack. The
                instructor often selected me to dance with her when
                demonstrating a new step or dance. She was kinda cute and I was
                flattered. I did attend a few of our high school dances. I had
                no particular girl friend until my senior year. Her name was
                Janet Volk — daughter of the owner of Volk Funeral Home in
                Teaneck. She was a student librarian, and I made it a point to
                Visit the library quite often. I&rsquo;ll never forget the time I
                called on her at her home. Her mother, who was beautiful,
                answered the door and directed me to a room in the basement
                where Janet was &ldquo;working.&rdquo; When I opened the door, there she was
                putting make—up on a corpse. That I didn&rsquo;t expect, nor
                particularly enjoy watching. So much for high school.
              </p>

              <h2
                id="1940-to-1943"
                className="font-oswald text-2xl sm:text-3xl font-normal text-gray-800 border-b-2 border-gray-200 pb-3 mb-8 mt-12"
              >
                1940 to 1943
              </h2>

              <p>
                I applied for acceptance at Lehigh University in early 1940 and
                was quickly accepted. There must have been other colleges to
                which I applied but my memory fails me as to which ones. Why
                Lehigh University? It was renowned as having an excellent
                engineering curriculum, and I wanted to follow my Dad&rsquo;s
                footsteps and be an engineer. Another reason — it was close to
                home so that I could get there and back over a weekend if
                necessary. In those days Lehigh had about 1700 undergraduate
                students — all male.
              </p>

              <p>
                I lived in a dormitory for the first seven months. It was called
                &ldquo;Drinker House&rdquo; — and, no, it did <em>not</em> mean that only
                those who drank lived there! Fraternity rushing started the
                latter part of September, 1940. Rushing in those days consisted
                pretty much of dinners at the fraternity house, picnics with the
                brothers and seeing a burlesque show in Allentown. It&rsquo;s my
                understanding that fraternity rushing is a bit more refined now.
                I received at least two invitations to join other fraternities
                but selected Beta Theta Pi - a national fraternity, and have
                never been sorry. In those days I was rather shy - not
                aggressive in making friends. Fortunately frat life changed
                that. Of course living in a dormitory didn&rsquo;t leave me too much
                time to associate with my fraternity brothers who numbered about
                30. My only contacts with them were at the dinner table and
                watching sporting activities, mostly football, wrestling and
                basketball. During my freshman year one of the upper classman
                told me that if I didn&rsquo;t move from the dormitory to the
                fraternity house and get to know the brothers better, I might
                not become a member. So in early 1941 I moved to the Beta house,
                got to know the brothers better, participated in the
                fraternity&rsquo;s activities and on March 7, 1941, was formally
                initiated, I eventually was chosen House Treasurer and
                eventually President.
              </p>

              <p>
                During the summer of 1941 I worked as a plumber&rsquo;s helper for $15
                a week. The boss specialized in rough plumbing of new homes in
                the Bergen County area. Most of the time I was a &ldquo;go-fer&rdquo;, but I
                was allowed to caulk sewer pipe and cut and thread pipe for
                water and gas. I also drove a truck to pick up supplies at
                various plumbing supply houses. The guys I worked with were very
                earthy people. It was quite an education for me. Most of them
                only had a twelfth grade education if that. Despite my being a
                &ldquo;college guy&rdquo;, I got along quite well with most of the workers.
              </p>

              <p>
                The Beta house was known as the wrestling fraternity. One of my
                brothers, Harold Masem, was an Olympic champion in three
                different weight classes at the same time. We had four or five
                brothers on the team, some on the football team and one or two
                on the basketball team. We got used to winning wrestling matches
                and losing football games. The extent of my activity in sports
                was confined to interfraternity wrestling and being a manager of
                the lacrosse team.
              </p>

              <p>
                Before freshmen classes began we had to take some tests. I
                passed all but one — english. The english course I had at
                Teaneck high school concentrated on reading literary works —
                Shakespeare, Chaucer, etc. not on learning how to write to be
                clearly understood. Consequently I flunked the english test and
                had to take english zero with no credits. Lehigh&rsquo;s faculty felt
                very strongly that everyone — engineer, arts and business
                students, in order to be successful, must be able to express
                themselves by writing clearly and concisely. I do believe that,
                even though it hurt, terribly, to flunk english zero, the lesson
                learned benefited me the rest of my life.
              </p>

              <p>
                Here again my social life at college was not spectacular. I had
                to study every night during the week to get decent grades,
                leaving only the weekends for fun. Two of the hangouts for
                almost every Lehigh student was Joe Kinney&rsquo;s Bar and the
                Mannechor, a German pub. I know that you kids won&rsquo;t believe that
                your father drank at the tender age of 17 and 18 — but on
                occasion I did. One time when I was an upper classman I had too
                much to drink on a Saturday night. Around eleven o&rsquo;clock on
                Sunday morning, in order to awaken me, a lowly freshman was
                bouncing the heck out of my cot in the third floor dormitory
                room. I opened my eyes, was just about able to see the freshman,
                and thought he had lost his senses. Freshmen just didn&rsquo;t do that
                to upper classmen! I was just about to cuss him out when he
                motioned me to be quiet and said, &ldquo;Your father is on the other
                side of the dormitory door waiting to see you and your mother is
                downstairs.&rdquo; This was <strong>not</strong> good news! I had no
                idea they were planning to visit me. So I staggered out of bed,
                greeted my dad, and told him after I had a shower and got
                dressed I would meet them downstairs. The were going to take me
                to the Bethlehem Hotel for dinner. I don&rsquo;t think I&rsquo;ll ever
                forget the hurt look on my mom&rsquo;s face when I greeted her. She
                never even entertained the thought that her darling son would
                ever get drunk. To make matters worse I just picked at my dinner
                when ordinarily I would have devoured it with great
                satisfaction.
              </p>

              <p>
                The Mannechor was actually a private club. You had to have a
                membership card, but a member could have guests. So we did
                exactly what you would have done. One of the Betas purchased a
                card and invited about a dozen or so brothers into the club. I
                still remember that beer was fifty cents a pitcher and all the
                pretzels you wanted were free. We had good times there - often
                singing songs and playing drinking games.
              </p>

              <p>
                Perhaps the highlights of the social season were the spring
                proms. The girls we invited took over the fraternity house. The
                brothers stayed at a friend&rsquo;s house in town or rented a room at
                one of the two Bethlehem hotels. A week before the prom began
                all the brothers got together to clean up the house. We
                vacuumed, painted, polished and put the doors back on the stalls
                in the bathroom. Since being rather critical about the clean up
                work done by my brothers, I got the nickname of &ldquo;Ma&rdquo; Pruett. The
                first prom I attended was held in the fall of 1941. My date was
                Connie Platt, a cousin of Jim Platt. She lived in Fort Lee and
                we, to the best of my recollection, had dated only one time
                before when I was in high school. She was a very sweet girl and
                a good Catholic. In fact she became a nun! Whether or not that
                choice had anything to do with the prom I&rsquo;ll never know. I think
                that was the last date we had.
              </p>

              <p>
                My date for the spring prom in 1942 was Mary Lou Reiber — the
                twin sister of Paul Reiber, my fraternity brother and one of my
                best friends. She was a blind date, and we hit it off very well.
                A couple of times during holidays, I visited with Paul and Mary
                Lou at their home in Pittsburg. We double dated along with Paul
                and his girl friend, Esta, Who is now his wife. Mary Lou was my
                date again at the fall prom in 1942 at which time I gave her my
                fraternity pin. We always had name bands at these proms —
                sometimes two at the same prom. I remember on one occasion that
                Sammy Kaye and one of the Dorsey brothers&rsquo; bands played for us.
              </p>

              <p>
                Another form of recreation was, of course, going to the movies
                but &ldquo;never on Sunday.&rdquo; The blue laws were in effect. What else
                in the city of &ldquo;Bethlehem.&rdquo;
              </p>

              <p>
                The elective subjects available to a freshman in the engineering
                school were almost nil. We were, however, encouraged to select a
                major in our sophomore year. I selected chemical engineering in
                the beginning but changed to metallurgical engineering at the
                end of my sophomore year. Fortunately I discovered that
                inorganic chemistry required course in chemical engineering but
                not in metallurgical engineering. That was one tough subject
                and, not being the brightest student in the world, I decided to
                make the switch.
              </p>

              <p>
                On Sunday afternoon, December 7, 1941, I was studying in my room
                on the second floor of the fraternity house. All of a sudden I
                heard a lot of commotion on the first floor from my brothers who
                were listening to the radio. It wasn&rsquo;t long before everyone in
                the house knew that the Japanese had bombed Pearl Harbor. The
                significance of that event didn&rsquo;t immediately register with me.
                It wasn&rsquo;t clear at that moment about the extent of the damage
                from the raid. It certainly changed the plans of not just the
                students at Lehigh but people throughout the world. Some
                students decided to quit college and enlist in the armed forces.
                Some like I, rather than being drafted in the army, decided to
                volunteer for service in a branch of our own choosing. My
                interest was in flying. Should I opt for flying in the navy or,
                at that time the Army Air Corps? Being just a little
                pessimistic, I could picture myself flying back to the aircraft
                carrier from a combat mission in the middle of the Pacific ocean
                just as the carrier was sinking after being torpedoed by a
                Japanese submarine. My choice was the Army Air Corps. Of course
                I was hoping to get my degree in metallurgical engineering
                before being called up, but that was not to be. In 1942 I, and
                many other students, even took an accelerated course to continue
                our education without any summer break in order to get our
                degree before we were called to serve our country. Around the
                end of 1942 I received a notice from the Army Air Corps
                informing me that I was to report for duty on February 13, 1943.
                What a birthday present!! That day I departed from Philadelphia
                on a troop train to Miami Beach. It took two days to get to our
                destination. Obviously we were on a low priority mission because
                our train was shunted to a siding whenever another train passed
                our train regardless of what it was transporting — cows, pigs,
                garbage, etc. I think the coaches we were riding in were of
                Civil War vintage. No beds, dirty, and no water to wash or
                shave. I wore a light colored gabardine suit, white shirt, and a
                tie. What a mistake. All of us were tired and filthy when we
                finally arrived at Miami Beach on February 15.
              </p>

              <p>
                We, who were now known as Aviation Cadets, were billeted in a
                rather small, but modern, hotel close to the famous Collins
                Avenue — nice quarters. Most of our time in Miami Beach was
                spent marching, learning how and when to salute, and other
                military disciplines. Since I had prior experience in marching,
                because of my two years of ROTC at Lehigh, I was selected as a
                squadron commander. We learned a lot of marching songs which we
                sang around 5:30 in the morning as we marched to breakfast. I&rsquo;m
                sure that the natives and rich northern snow birds appreciated
                that.
              </p>

              <p>
                We were never permitted to leave Miami Beach during the month
                and a half we were there. Miami was off limits and there wasn&rsquo;t
                much to do in Miami Beach. When I first arrived I thought I
                wanted to spend the rest of the war there. The weather was
                excellent, nice surroundings, good food and living
                accomodations, and time off for swimming in the ocean. However,
                after a couple of weeks, I wanted to move on. I wanted to learn
                how to <strong>fly</strong>.
              </p>

              <p>
                About the beginning of April some of us Aviation Cadets were
                sent by rail to Kent State University in Kent, Ohio, for, what
                was called, College Training Detachment. We were billeted in the
                college&rsquo;s dormitories. While there we had instruction in courses
                like meterology, some algebra, and theory of flight, among
                others. Naturally we had more marching drills. Most satisfying
                was the five hours of instruction each cadet got in a small,
                single engine plane with a 40 hp engine. It seemed to take
                forever to get that plane off the ground and to an altitude of
                two or three thousand feet. Mom came out to visit me over a
                weekend while I was off duty. It was sure great to see her. Dad
                was in a hospital in Connecticut being treated for depression.
                Mom and I had been to church on Sunday and one of the
                parishioners we had met called Mom at her hotel and invited her
                to dinner when I was on duty. She accepted. You see we were the
                first military unit to arrive in Kent and they really treated us
                and our families royally. A lot of patriotism in those days.
              </p>

              <p>
                After a couple of months at KSU we were on our way to San
                Antonio, Texas for more basic training. While there we were
                taught to identify both allied and enemy aircraft in a fraction
                of a second. That training would be important in combat because
                we only want to shoot down enemy aircraft - not our own. We also
                learned Morse code so that we could copy at a rate of 10 words a
                minute. More marching and this time cross country running.
                Unfortunately, I contracted a mild case of pneumonia and ended
                up in a military hospital for a couple of weeks. That resulted
                in a delay in my training and consequently a postponement in the
                date I was to earn my wings and become a second lieutenant, An
                example of the Pruett luck! We were quartered in barracks on our
                base in San Antonio. Each cadet had an open storage cabinet by
                his cot in which we were to keep <strong>only</strong> our
                clothing and towels all neatly folded. On inspection day an
                officer flipped through my neatly folded towels and discovered a
                picture hidden among them of a girl I dated at KSU. Penalty —
                four hours of walking around a square with a rifle on my
                shoulder.
              </p>

              <h2
                id="1943-to-1945"
                className="font-oswald text-2xl sm:text-3xl font-normal text-gray-800 border-b-2 border-gray-200 pb-3 mb-8 mt-12"
              >
                1943 to 1945
              </h2>

              <p>
                All the flight training I had was under the authority of the
                Gulf Coast Training Command.
              </p>

              <p>
                My primary flight training took place in Chickasha, Oklahoma,
                from November, 1943 to January, 1944. The plane we flew was a
                single engine, low wing, two place Fairchild PT 19. (PT is an
                abbreviation or primary trainer). Our flying was all in the
                local area which was within a radius of about 50 miles. We
                practiced landings and some acrobatic maneuvers like loops,
                rolls, spins, and lazy eights. I was fortunate to have soloed
                after only five hours of instruction. How well I remember that
                day. I had just landed the airplane after practicing landings
                with my instructor. At the end of the landing roll he got out of
                the plane — which I thought was odd, and said, &ldquo;It&rsquo;s all yours.
                Take off and shoot a couple of landings.&rdquo; I did and, since I
                walked away from the plane after the two landings, I guess they
                could be called good ones. There was only one flying incident
                that shook me up. I was practicing lazy eights at about 4,000
                foot altiude when all of a sudden the plane went into a spin. It
                startled me to put it mildly. I tried to recover without
                success. Then I told myself to try once more and, if I failed,
                to bail out. Of course we always wore parachutes when flying in
                the military. Fortunately the second recovery attempt was
                successful, but the ground was coming up very rapidly. From then
                on, when practicing acrobatics, I climbed to 6,000 feet to give
                myself more recovery room.
              </p>

              <p>
                Another Pruett luck story that happened in Chickasha. Three
                other cadets and I had dates one night with girls from the
                Oklahoma College for Women. The four of us were dependent upon
                taxis to get to and from the base, and we had to be back by
                midnight. We called the taxi company about eleven o&rsquo;clock and
                asked them to pick us up no later than 11:30 for the 15 minute
                ride back to the base. No problem we were told. Well 11:30 came,
                11:45 and still no taxi. We knew we would not be back by
                midnight. What to do? My three friends said that they were going
                to climb over the fence which surrounded the base. I decided to
                pass through the main gate and tell the MP why I was late.
                Certainly they would understand and I would be forgiven. Not
                so!! How naive could I be. I had to report to our base
                commander, a captain, the following morning. The result —
                marching around the headquarters building with a rifle on my
                shoulder for six hours on my next day off. You guessed it — the
                other three went over the fence and got away scott free. I
                learned rather quickly that honesty does not{" "}
                <strong>always</strong> pay.
              </p>

              <p>
                My basic training was at Independence, Kansas, and lasted from
                January to March of 1944. We flew the BT 13 (basic trainer)
                built by both the North American and Vultee companies. Our basic
                training included more acrobatics and cross country, formation,
                instrument, and night flying. Had an interesting experience
                flying one night. I was on the final approach in preparation to
                land when all of a sudden I got a series of red flashes from a
                light gun in the tower. That is a danger signal. I looked around
                and saw another BT 13 about 20 yards to my right, at the same
                altitude, and lined up for the same runway. I got out of there
                fast.
              </p>

              <p>
                My advanced training in multi—engine aircraft took place in
                Pampa, Texas, from March to June, 1944. We flew Cessna AT—17s,
                affectionately called the bamboo bomber. It had a fabric,
                instead of a metal, covered fuselage and wings. More formation
                and instrument flying plus cross country flying at night. In
                those days we didn&rsquo;t have sophisticated radio navigational aids.
                My night cross country was a round trip from Pampa to Tucumcari,
                New Mexico, about 320 miles round trip using a light line. The
                light line was a series of lights flashing morse code signals of
                letters in the alphabet. The lights were spaced every 10 miles
                or so and, by referring to the light line signals on a map, you
                knew your position.
              </p>

              <p>
                May 23, 1944, was graduation day. The girl I was going with
                pinned wings on my summer uniform, and I got my second
                lieutenant&rsquo;s gold bar. It was a custom then that you had to give
                a dollar to the first enlisted man who saluted you. I had no
                regrets in giving away the dollar.
              </p>

              <p>
                We had a two weeks leave after graduation - my first since
                entering the service. Of course I went home to Teaneck wearing
                my new tailored tan gabardine summer uniform with wings and a
                2nd lieutenant&rsquo;s bars. Was I proud — so were Mom and Dad!!
              </p>

              <p>
                The months of June through October of 1944 were spent at
                Liberal, Kansas, learning how to fly the B-24 liberator bomber.
                It is a four engine plane built by the Consolidated Company.
                This is what I wanted to fly. In basic training pilots were
                asked their preference for flying single engine or multi—engine
                aircraft. I was fortunate in getting my wish — multi—engine —
                the bigger the plane the better. Having more than one engine was
                also an attraction in case one went out. It was quite a
                transition from flying a fabric covered plane with two engines,
                each rated at 225 hp, to an all metal plane with four engines
                each rated at 1200 hp. In addition to simply getting accustomed
                to flying the big (in those days) bomber we continued practicing
                our instrument, formation, and night flying skills. This
                training also included high altitude (more than 12,000 feet)
                flying using, of course, oxygen masks.
              </p>

              <p>
                In early November, 1944, I was assigned to a Replacement
                Training Unit base in Pueblo, Colorado. It was there that we
                formed our crews and flew as a combat crew team. A crew
                consisted of four officers - a pilot, co—pilot, navigator and
                bombardier and six enlisted men - a crew chief who was
                responsible for making sure that all equipment — mechanical,
                electrical and hydraulic — on board was operating
                satisfactorily, a radio man, ball turret gunner, tail gunner and
                two waist ganers. The training was similar to that at Liberal,
                Kansas, with one additional requirement - two 1,000 mile night
                cross country flights. Both times I headed south from Pueblo to
                Dallas, Texas, and both times I had an engine failure. No big
                deal because the other three engines operated normally. Each
                time the bad engine was repaired and back we flew to our base
                with no problem.
              </p>

              <p>
                The challenging part of my job as flight commander was to get
                ten men to work, cooperate with one another, and perform as a
                team. I had three problem crewmen. The co—pilot was about five
                years older than I and, he he had recently been divorced. He was
                not a happy camper and resented reporting to me, a younger man.
                My navigator, a southerner and an alcoholic, was really
                knowledgeable in his field and when sober he was an excellent
                navigator. However, you never knew when he would be drunk. He
                also loved the women — perhaps a little too much and too often.
                The radio operator was Jewish and did not take his job seriously
                enough to suit me. He worried a lot because we all knew that we
                were going to the European theatre and he was not looking
                forward to the possibility of being a German prisoner. His dog
                tags were stamped HR indicating Hebrew Religion. The other
                enlisted men told him if he was captured by the Germans he
                should just tell them that he was a Holy Roller.
              </p>

              <figure className="my-8 text-center">
                <a href="/images/squad.jpg" target="_blank">
                  <Image
                    src="/images/squad.jpg"
                    alt="Samuel Clifton Pruett with his military squadron"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-full h-auto"
                  />
                </a>
              </figure>

              <p>
                In early February, 1945, we flew from Pueblo to Wichita, Kansas,
                to pick up a brand new B—24, Model M, to fly to Europe. After a
                couple of days of checking the plane out to make sure all the
                equipment was operating properly, we departed Wichita for
                Bangor, Maine. We took off early in the morning when it was
                still dark. Then as dawn approached and our plane was near
                Springfield, Illinois, I heard the bomb bay doors open. That was
                not expected! Well it seems that this co-pilot of mine had to go
                to the bathroom and the facilities he required were non-existent
                on our plane or any Other military plane known to me. The relief
                tubes on the plane would not satisfy his needs. Get the picture?
                Being an ingenious soul he emptied the contents of his box lunch
                and used the box for what he had to do. Then he disposed of it
                through the open bomb bay doors. I could picture some poor
                farmer out in the fields or some worker on the early shift being
                hit with that box &ldquo;lunch&rdquo;.
              </p>

              <p>
                When we landed at the airport in Bangor, Maine, the snow along
                the runway was piled as high as the plane&rsquo;s wingtips which
                astounded my navigator from Alabama. He&rsquo;d <strong>never</strong>{" "}
                seen snow that high. On the evening of February 13, 1945, my
                birthday I called my mom and dad to tell them I was on my way to
                Italy. They took the news very well - no crying. The next
                morning we took off for Gander, Newfoundland, and the following
                morning we flew to Lajes in the Azores. That flight was a little
                hairy because we lost, for a couple of hours, radio navigational
                signals and the wings began to ice up. I had no previous
                experience flying in icing conditions, and it did get my
                attention. I operated the rubber boots on the leading edge of
                the wings and fortunately was able to break off the ice.
              </p>

              <p>
                From the Azores we flew to Marakesch, Morocco, then to Tunis,
                Tunisia, and finally to Guilia, Italy, our destination. Then a
                very sad thing happened. I was under the impression that I would
                be flying this brand new beautiful bright silver airplane all
                through combat. Not So. They took away the plane and transported
                us in a truck to our base in nearby Cerignola. From then on I
                flew the dull, camouflaged planes that everyone else flew but,
                since I was a new arrival at the base, I got to fly the{" "}
                <strong>oldest aircraft</strong>.
              </p>

              <p>
                After leaving the Azores to continue our flight to Italy, I was
                concerned about the possibility of encountering German fighter
                aircraft. The only armament we had was our side arms - 45
                caliber pistols which wouldn&rsquo;t have been very useful against
                machine guns. Fortunately we never saw any enemy aircraft. The
                war was winding down!
              </p>

              <p>
                Life at Cerignola wasn&rsquo;t too bad. My crew and I were assigned to
                the 459th bomb group which had four squadrons - ours, the 756th
                squadron, and three others - the 757th, 758th and the 759th. The
                air &ldquo;field&rdquo; we used had been a vineyard - the single runway
                consisted of steel matting. We lived in tents, about six men per
                tent, - officers in one area and the enlisted men in another
                area. Each tent was heated by a furnace rigged from a 55 gallon
                oil can. Latrines were enclosed in an unheated wooden shed.
                Shower facilities were rather primative but adequate. We had
                meals in a messhall which I believe was once the farmer&rsquo;s house.
                Food was pretty good, but I didn&rsquo;t like the powdered milk and
                eggs. At times we&rsquo;d pay the local farmers for some fresh eggs.
                Each month we were paid in Italian lira - one lira = a US cent.
                Every week or two we&rsquo;d be given a carton of cigarettes (Which I
                gave to my crew because I didn&rsquo;t smoke) and a bottle of liquor
                which I kept.
              </p>

              <p>
                My combat missions, which began on March 22, consisted primarily
                of bombing marshalling yards (concentrations of enemy supply
                trains, military storage facilities, etc.) and bridges in places
                like Kralupy and Prague, Czechoslovakia; Munich, Germany; Linz,
                Austria; Padua, Italy; Szombathely, Hungary; and other places.
                In the spring of 1945 the German infantry in Italy was
                retreating north to Austria and southern Germany. Therefore we
                bombed bridges over rivers in northern Italy to slow their
                escape. We also bombed factories manufacturing essential war
                materials.
              </p>

              <p>
                For a typical day&rsquo;s flying mission we were first aroused by an
                orderly around 5:00 am, dressed and had breakfast, back to the
                tent to brush teeth, shave and visit the latrines. Then we would
                get a briefing on the day&rsquo;s mission - maps were distributed to
                the navigators, our target was revealed, expected weather and
                enemy aircraft, if any, along the route was announced and the
                amount of antiaircraft activity and flak we could expect. Then
                we synchronized our watches and finally the chaplain prayed for
                the success of our mission. Around 6:30 am trucks brought us to
                the flight line and we preflighted the plane by checking the
                tires, any oil leaks, electric and hydraulic systems, radios,
                flight controls, etc. Then at a designated time - usually around
                7:00 am, all planes on the mission would start engines and taxi
                out of the parking area in sequence for take off. We maintained
                radio silence for fear the Germans would hear our radio chatter
                and be tipped off about our mission. There were usually about 15
                to 20 B-24&rsquo;s on a mission from our squadron. Our missions would
                last almost eight hours. Each crew member had canned rations for
                lunch and either water or cannned drinks. After returning to our
                base we were immediately interrogated by military intelligence
                officers as to the amount of enemy aircraft encountered, amount
                of flak and/or antiaircraft activity, degree of success in
                hitting our target, estimate of damage, etc.
              </p>

              <p>
                Normally each crew member participated in 25 combat missions
                before returning to the states. Since the war was fast coming to
                a close, I had only 14 in less than three months. The war in
                Europe was over officially on May 8, 1945.
              </p>

              <p>
                With no more combat missions to fly we had a lot of time on our
                hands. We would fly to Rome or Naples a few times in our B-24&rsquo;s.
                I visited a lot of the tourist sights in both cities - in Rome
                the Colosseum, Forum, Pantheon, Vatican City, St. Peter&rsquo;s
                Basilica, Catacombs and many other interesting sites. I even had
                an audience with Pope Pius, along with about 1,000 other
                military personnel from many of the allied countries and Italian
                citizens. In Naples I visited Pompei and had dinner in a fine
                restaurant on a hill overlooking the Bay of Naples and Mt.
                Vesuvius. The Bay of Naples was littered with ships sunk on
                purpose by the Axis powers to make any anticipated landings by
                the Allied forces almost prohibitive.
              </p>

              <p>
                In May, 1945, another pilot and I flew some of the ground
                personnel in our squadron from Cerignola to Cairo, Egypt, on a
                sight seeing tour. Along the way we flew over Tobruk, Libia, and
                El Alamein, Egypt, along a stretch of north Africa in which
                Field Marshall Erwin Rommel, the &ldquo;desert fox&rdquo; and Lt. General
                Bernard Montgomery fought over so vigorously for 15 months
                beginning in February, 1941. We saw hundreds of rusted tanks,
                trucks, and artillary pieces which were abandoned in that
                see-saw battle.
              </p>

              <p>
                In Cairo we toured the city including the bazaar, rode camels
                around the Sphinx and went inside one of the Giza pyramids. It
                was a thrill for me. On the down side of our Cairo visit, I got
                a bad case of food poisoning. I managed to survive the flight
                from Cairo to Tel-Aviv where I was immediately admitted to a
                British hospital. They took good care of me, and after a day and
                a half I was permitted to rejoin the rest of the crew but only
                after promising the British doctor that I would report to my
                base flight surgeon immediately after landing. I would have
                promised anything, because, realizing that this would probably
                be my only opportunity to visit the holy land, I wanted to see
                Bethlehem and Jeruselum. Fortunately I was able to make a whirl
                wind tour of both cities.
              </p>

              <p>
                Some high ranking officer in the 15t Air Force decided that we
                should fly members of the ground crews, and others not on flying
                status, around Italy, Austria and southern Germany so they could
                see some of the cities and the results of our bombing missions.
                I flew a group of these unsung heroes on an eight hour tour
                which included Naples, Pisa and the leaning tower, Rome, Munich,
                Linz, and Venice. When flying over Munich I could see the{" "}
                <strong>basements</strong> of many high rise office and
                apartment buildings. Apparently our side did more than bomb oil
                refineries and bridges.
              </p>

              <p>
                During the lull in our military activity we did get to see one
                USO show near our base. Frank Sinatra, old blue eyes, and his
                side kick, Phil Silvers, came to entertain us. They did a great
                job. Frank sang many songs popular in the forties. One song I
                did not expect to hear him sing was &ldquo;Old Man River&rdquo;. Paul
                Robeson, a tall, strapping black man used to sing that song and
                now I was listening to that skinny Sinatra singing it. But I&rsquo;ve
                got to hand it to him - he was marvelous. Frank also sang &ldquo;Nancy
                With The Smiling Face&rdquo;. If I&rsquo;m not mistaken Phil Silvers wrote
                the lyrics to that song about Frank&rsquo;s daughter.
              </p>

              <p>
                The war took its toll on many Italian citizens, especially in
                northern Italy where the retreating German soldiers took all the
                food they could get their hands on. The 15th Air Force was
                called upon to supply some of these northern cities with food.
                So some of our B-24 bombers were converted to cargo ships and we
                flew our mercy missions of food to these starving people. I
                remember flying a couple of these missions to Balzano in
                northern Italy near the German border.
              </p>

              <p>
                Finally, in the latter part of July, 1945, I was transferred to
                a base near Naples to await my return to the USA. The word was
                that we pilots would then be trained to fly B-29s and hasten the
                end of the war in the Pacific by bombing Japan. That sounded
                good to me because I wanted the war in that hemisphere over and
                I looked forward to the challenge of flying the larger B-29. I
                was disappointed to learn that we would not be flying back to
                the states but instead we would return by Liberty ship. We were
                about half way across the Atlantic ocean when the news broke
                that Hiroshima and Nagasaki had been destroyed by atom bombs.
                The war in the Pacific was over on August 9.
              </p>

              <p>
                About two weeks before leaving Naples I had a three day rest
                leave on the Isle of Capri. It was a beautiful place - we stayed
                at an elegant hotel, had great food, visited the famous Blue
                Grotto, and danced to live music.
              </p>

              <p>
                The voyage on board a Liberty ship from Naples harbor to the New
                York harbor was a <strong>very</strong> slow process. As I
                recall it took us about two weeks. We arrived in New York City
                in late August of &rsquo;45. Mom and grandma Homer met me at dockside
                and were they ever happy to see me and I them. It must have been
                about a year since we saw one another. My dad at that time was
                in a rehabilitation center being treated for depression. He had
                suffered from depression off and on for over two years. I&rsquo;ll
                never forget the feeling I had when the ship passed the Statue
                of Liberty. Although I had visited it before on a couple of
                occasions, this time the sight of that statue had added
                significance. It meant freedom from oppression. I realized then
                how the immigrants, escaping from European oppression must have
                felt when they saw that wonderful statue.
              </p>

              <p>
                I was home only a few days when mom, dad and I drove to
                Christmas Tree Inn in Bridgeton, Maine, for a week&rsquo;s vacation.
                It was a place we had spent our vacations before when I was in
                high school. They had been saving gasoline stamps for that trip
                in anticipation of my return from Italy. Of course since the war
                was over stamps were no longer required. Arriving back to
                Teaneck I developed hepatitis. I&rsquo;m not sure howl got this
                disease — whether it was from hypodermic needles from shots I
                had in Italy just before returning home or from eating lobsters
                in Maine. Since I was still in the military, I was sent to Camp
                Shanks in Orangeburg, New York, to recuperate.
              </p>

              <p>
                After leading such an active life for the past two and a half
                years, just hanging around Teaneck soon got rather boring. I
                decided to hitch hike by military aircraft to California and see
                Connie Amar, my bombardier. I started from Mitchell Army Air
                Basein Long Island and got a ride almost immediately to Memphis,
                Tennessee. From there I flew to San Antonio, Texas, and on to
                Reno, Nevada. Then I hitch hiked on the road - got a ride to Los
                Angeles, toured that city for a couple of days, before getting
                another flight to San Francisco where I met Connie. We had a
                great time touring that city and reminiscing about our training
                and combat experiences.
              </p>

              <p>
                Getting back east was a problem. I must have spent two or three
                days at a military airport outside of San Francisco waiting for
                a flight home. I finally ended up going by bus and train for
                most of the 3,000 miles back to Teaneck. All this was done
                during the latter part of November and early December of 1945
                and it only cost me around $200 for the month I was away. A
                great experience and a lot more fun than hanging around Teaneck.
              </p>

              <h2
                id="1945-to-1947"
                className="font-oswald text-2xl sm:text-3xl font-normal text-gray-800 border-b-2 border-gray-200 pb-3 mb-8 mt-12"
              >
                1945 to 1947
              </h2>

              <p>
                I returned to Lehigh University in 1946 to graduate with some
                kind of degree. I took a couple of refresher courses in
                metallurgy - my major back in 1942 - but discovered that the
                subject no longer appealed to me. Therefore I changed my
                curriculum to In Industrial Engineering and graduated with a
                B.S.-IE degree in June, 1947.
              </p>
            </div>
          </section>

          <section className="Obituary bg-slate-50 border-2 border-slate-200 rounded-lg p-6 sm:p-8">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="text-center border-b border-slate-300 pb-4 mb-6">
                <h2 className="font-oswald text-2xl sm:text-3xl font-normal text-slate-800 mb-2">
                  In Memoriam
                </h2>
                <div className="w-16 h-px bg-slate-400 mx-auto"></div>
              </div>

              <p className="text-lg leading-relaxed text-slate-700 text-center font-medium">
                Lt. Col. S. Clifton Jr. (Ret), USAF, 86, of Henersonville, NC
                died Wednesday, January 27, 2010 at the Carolina Village Medical
                Center.
              </p>

              <p className="text-lg leading-relaxed text-slate-700">
                A native of Weehawken, NJ, he was a son of the late S. Clifton
                Pruett, Sr. and Ruth Horner Pruett. He was a prior resident of
                Hillsdale, NJ, before moving to Henderson County.
              </p>

              <p className="text-lg leading-relaxed text-slate-700">
                He was employed as commercial manager of the Paterson Commercial
                Office, and had been with PSE&G for over 35 years, before
                retiring in 1985. While with PSE&G, he held several titles;
                sales application engineer, assistant director of sales
                engineering services, director of sales and assistant manager of
                industrial and commercial marketing. A graduate of Lehigh
                University, he received his B.S. degree in Industrial
                Enggineering and later his MBA from Rutgers University in 1958.
                A pilot with the US Air Force, he served his country honorably
                during WWII in Italy where he flew a B-24 (the Liberator), and
                was later recalled to serve in the Korean War. While living in
                NJ, he was the past president of the Hackensack Chamber of
                Commerce, past president of the Paterson Chamber of Commerce,
                past president of the Patterson United Way, member oft he
                American Gas Association, the Bergen Electrical League and the
                North Jersey Speakers Forum, and locally, a member and past
                president of the Hendersonville Citivan Club, and active member
                of the Hendersonville Congregational Church. Wherever he lived,
                he wanted to make a difference in the community. He will be
                dearly missed by all that knew and loved him.
              </p>

              <p className="text-lg leading-relaxed text-slate-700">
                Survivors include his loving wife of 62 years, Sallie Rice
                Pruett; one daughter, Sandra Pruett and partner, Mark Kimball,
                of Anna Maria, FL and her two children, daughter, Lindsey, and
                son, Justin and his wife, Anna, and great-grandson, Mason; two
                sons, Douglas J. Pruett and wife, Barbara, of Park Ridge, NJ,
                their children, Arianna, Kevin and Nicole and her husband,
                Walter, Craig A. Pruett and wife, Carol, of Morris Township, NJ,
                their children, Kristen and Bryan.
              </p>
            </div>
          </section>
        </div>
      </main>

      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-2xl sm:text-3xl font-normal text-gray-800 mb-4">
              Family Gallery
            </h2>
            <div className="w-16 h-px bg-gray-400 mx-auto"></div>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
            <li className="list-none">
              <a
                href="/images/craig.jpg"
                target="_blank"
                className="block group"
              >
                <Image
                  className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover aspect-[4/3]"
                  src="/images/craig.jpg"
                  alt="Craig Pruett"
                  width={400}
                  height={300}
                />
              </a>
            </li>

            <li className="list-none">
              <a
                href="/images/cockpit.jpg"
                target="_blank"
                className="block group"
              >
                <Image
                  className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover aspect-[4/3]"
                  src="/images/cockpit.jpg"
                  alt="Aircraft cockpit"
                  width={400}
                  height={300}
                />
              </a>
            </li>

            <li className="list-none">
              <a
                href="/images/family.jpg"
                target="_blank"
                className="block group"
              >
                <Image
                  className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover aspect-[4/3]"
                  src="/images/family.jpg"
                  alt="Family photo"
                  width={400}
                  height={300}
                />
              </a>
            </li>

            <li className="list-none">
              <a
                href="/images/newborn.jpg"
                target="_blank"
                className="block group"
              >
                <Image
                  className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover aspect-[4/3]"
                  src="/images/newborn.jpg"
                  alt="Newborn photo"
                  width={400}
                  height={300}
                />
              </a>
            </li>

            <li className="list-none">
              <a
                href="/images/sandee-doug.jpg"
                target="_blank"
                className="block group"
              >
                <Image
                  className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover aspect-[4/3]"
                  src="/images/sandee-doug.jpg"
                  alt="Sandee and Doug"
                  width={400}
                  height={300}
                />
              </a>
            </li>

            <li className="list-none">
              <a
                href="/images/table.jpg"
                target="_blank"
                className="block group"
              >
                <Image
                  className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover aspect-[4/3]"
                  src="/images/table.jpg"
                  alt="Table scene"
                  width={400}
                  height={300}
                />
              </a>
            </li>

            <li className="list-none">
              <a
                href="/images/portrait.jpg"
                target="_blank"
                className="block group"
              >
                <Image
                  className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover aspect-[4/3]"
                  src="/images/portrait.jpg"
                  alt="Portrait"
                  width={400}
                  height={300}
                />
              </a>
            </li>

            <li className="list-none">
              <a
                href="/images/nana.jpg"
                target="_blank"
                className="block group"
              >
                <Image
                  className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover aspect-[4/3]"
                  src="/images/nana.jpg"
                  alt="Nana"
                  width={400}
                  height={300}
                />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <footer className="bg-slate-800 text-slate-300 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-4">
            <div className="text-sm">
              <p>In loving memory of</p>
              <p className="font-oswald text-lg tracking-wider">
                Lt. Col. Samuel Clifton Pruett
              </p>
              <p>1923 — 2010</p>
            </div>
            <div className="w-16 h-px bg-slate-600 mx-auto"></div>
            <p className="text-xs text-slate-400">
              &ldquo;Wherever he lived, he wanted to make a difference in the
              community.&rdquo;
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
