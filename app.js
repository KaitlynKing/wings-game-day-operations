const { useState } = React;

const GameDayPresentation = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showScenario, setShowScenario] = useState(false);

  const handlePhaseChange = (newPhase) => {
    setCurrentPhase(newPhase);
    setShowScenario(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  const phases = [
    {
      title: "T-48 Hours: Pre-Game Coordination",
      time: "Friday, 10:00 AM",
      icon: "Calendar",
      color: "bg-blue-500",
      overview: "Two days before game day, my focus is on coordinating all team logistics and ensuring clear communication between the Wings basketball staff and visiting team operations. I serve as the primary liaison to make sure both teams have what they need.",
      keyPriorities: [
        { area: "Visiting Team Coordination", tasks: ["Connect with Las Vegas Aces operations staff to confirm arrival time and facility needs", "Share College Park Center facility information (loading dock location, wifi access, training room details)", "Coordinate visiting team practice time requests with our facility operations team"] },
        { area: "Wings Team Logistics", tasks: ["Confirm Wings players' and coaching staff's game day schedule and any special requests", "Coordinate team meals with catering (pre-game, halftime, post-game for both teams)", "Verify equipment needs with Wings equipment manager and ensure visiting team locker room is properly stocked"] },
        { area: "Basketball Operations Support", tasks: ["Update game day contact sheet with all basketball operations personnel from both teams", "Coordinate with Wings coaching staff on any game day presentation needs or requests", "Confirm credential requests from Wings coaching staff, visiting team staff, and officials"] }
      ],
      insight: "At this stage, my role is all about coordination and communication. I'm making sure the basketball side of things runs smoothly and serving as the bridge between our team, the visiting team, and the venue operations staff."
    },
    {
      title: "T-24 Hours: Final Team Confirmations",
      time: "Saturday, 10:00 AM",
      icon: "ClipboardCheck",
      color: "bg-indigo-500",
      overview: "With 24 hours to go, I verify all team-specific details are locked in. I focus on player and coach needs, confirm logistics with the visiting team operations coordinator, and ensure our basketball staff has everything they need.",
      keyPriorities: [
        { area: "Team Travel & Logistics", tasks: ["Confirm any last-minute travel updates from visiting team operations staff", "Verify Wings team bus schedule for player arrival at venue", "Double-check team meal times and dietary accommodations for both teams"] },
        { area: "Player & Coach Services", tasks: ["Confirm locker room setup meets both teams' specifications", "Verify practice equipment availability if either team needs additional shootaround time", "Coordinate any player-specific requests (extra ice, specific beverages, equipment needs)"] },
        { area: "Basketball Staff Communication", tasks: ["Send updated game day timeline to Wings coaching staff", "Confirm officiating crew arrival and locker room assignment with league operations", "Share final game day contact list with both teams' operations staff"] }
      ],
      insight: "This is when I make sure nothing falls through the cracks. I'm proactively checking in with people and maintaining open communication. My job is to anticipate what the players and coaches need before they ask, and to make sure both teams feel prepared and supported."
    },
    {
      title: "Game Day Morning: Team Arrivals & Setup",
      time: "Sunday, 8:00 AM",
      icon: "MapPin",
      color: "bg-purple-500",
      overview: "Game day begins with me arriving early to coordinate team arrivals and ensure both locker rooms are ready. I'm the first point of contact for both teams and serve as the liaison between basketball operations and venue operations.",
      keyPriorities: [
        { area: "Visiting Team Arrival", tasks: ["Meet Las Vegas Aces at their designated entrance and escort to locker room", "Provide facility orientation (training room location, court access, best routes through building)", "Coordinate visiting team court access for walkthrough and answer any facility questions"] },
        { area: "Wings Team Support", tasks: ["Ensure Wings locker room is set up to coaching staff specifications", "Coordinate any last-minute equipment or supply needs with equipment staff", "Be available for any player or coach requests as team arrives"] },
        { area: "Basketball Operations Liaison", tasks: ["Serve as point of contact between both teams' staffs and venue operations", "Coordinate practice basketballs and equipment delivery to both locker rooms", "Communicate any team-specific timing needs to game operations staff"] }
      ],
      insight: "On game day morning, I'm constantly moving and communicating. I make sure the visiting team feels welcomed and has everything they need, while also being available to support our own players and coaches. My focus is on supporting the basketball operations and ensuring both teams are ready."
    },
    {
      title: "Pre-Game: Team Readiness",
      time: "Sunday, 4:00 PM (3 hours to tip-off)",
      icon: "Users",
      color: "bg-pink-500",
      overview: "The final hours before tip-off are about being available and responsive to both teams. I position myself as the go-to person for any basketball operations needs while coordinating closely with our coaching staff.",
      keyPriorities: [
        { area: "Team & Coach Check-In", tasks: ["Check in with Wings coaching staff to ensure they have everything needed", "Touch base with visiting team operations staff to address any last-minute needs", "Confirm both teams are satisfied with locker room setup and amenities"] },
        { area: "Basketball Staff Support", tasks: ["Coordinate any last-minute requests from Wings coaching staff", "Ensure visiting team has clear communication channel for any needs", "Verify coaching staff have access to needed spaces (coach's office, meeting rooms)"] },
        { area: "Operations Coordination", tasks: ["Communicate with game operations on any team-specific timing requests", "Coordinate with officials' locker room attendant on officiating crew needs", "Stay in communication loop with both teams' operations coordinators"] }
      ],
      insight: "This is when I'm most visible and accessible. I'm supporting the teams and ensuring they have everything they need. If a coach needs something, if a player has a request, if the visiting team has a question, they know to find me. I troubleshoot basketball operations issues and keep everything running smoothly."
    },
    {
      title: "Game Time: Team Support",
      time: "Sunday, 7:00 PM (Tip-off)",
      icon: "Clock",
      color: "bg-red-500",
      overview: "During the game, I monitor team needs and maintain communication with both teams' staffs. I'm available for any issues that arise and coordinate halftime needs for players and coaches.",
      keyPriorities: [
        { area: "Real-Time Team Support", tasks: ["Stay accessible for any locker room needs or requests from either team during the game", "Maintain open communication with Wings coaching staff for any issues", "Be available to visiting team operations staff if they need anything"] },
        { area: "Halftime Coordination", tasks: ["Ensure both team locker rooms have necessary refreshments and supplies", "Coordinate any halftime adjustments to locker room setup if requested", "Communicate any team timing needs to game operations"] },
        { area: "Post-Game Preparation", tasks: ["Begin coordinating post-game needs (media access timing, team departure schedules)", "Confirm visiting team bus departure time with their operations staff", "Prepare for any post-game team needs or requests"] }
      ],
      insight: "During the game, I'm not watching as a fan. I'm monitoring team operations. I stay out of the way but remain accessible. My focus is on making sure both teams have what they need, when they need it, so they can focus entirely on the game."
    },
    {
      title: "Post-Game: Team Departure & Follow-Up",
      time: "Sunday, 9:30 PM",
      icon: "CheckCircle",
      color: "bg-green-500",
      overview: "After the game, I coordinate both teams' departures and ensure locker rooms are handled appropriately. I also gather feedback and document anything that will help improve future game day operations for the basketball staff.",
      keyPriorities: [
        { area: "Visiting Team Departure", tasks: ["Coordinate with visiting team operations staff on departure timeline", "Ensure visiting team locker room is secured and any team items are accounted for", "Thank visiting team operations staff and maintain positive relationship for future games"] },
        { area: "Wings Team Support", tasks: ["Be available for any immediate post-game needs from Wings coaching staff or players", "Ensure Wings locker room is secured and team has everything for departure", "Coordinate any equipment or supply issues with equipment staff for follow-up"] },
        { area: "Operations Documentation & Feedback", tasks: ["Gather feedback from Wings coaching staff on what went well and what could improve", "Document any issues or requests for future reference", "Send thank you and follow-up communication to visiting team operations staff"] }
      ],
      insight: "Post-game is about relationships and continuous improvement. I make sure both teams depart smoothly, but I also use this time to learn. What did our coaches need that they didn't have? What can I coordinate better next time? Building strong relationships with operations staff across the league makes my job easier all season."
    }
  ];

  const caseStudy = {
    title: "Case Study: Flight Delay Crisis Management",
    situation: "At 11:00 AM on game day, I receive an urgent call from the Las Vegas Aces operations coordinator. Their charter flight has experienced mechanical issues, and their new arrival time is 2:00 PM instead of 10:00 AM. This significantly cuts their preparation time and conflicts with their planned 3:00 PM shootaround.",
    immediateActions: [
      "Contact our facility operations team to check court availability and flexibility",
      "Communicate directly with Aces operations coordinator to understand their preferences and needs",
      "Alert Wings coaching staff of the situation in case it affects our team's schedule"
    ],
    solutionImplemented: "After discussing options with the Aces operations coordinator, I present two alternatives: a condensed 30-minute court walkthrough at 2:30 PM, or pushing their full shootaround to 4:00 PM. They prefer the 4:00 PM option. I coordinate with our facility operations to adjust court access, ensure their locker room is immediately ready upon arrival with meals waiting, and update all relevant parties (Wings staff, officials, game operations) on the timeline change. I also arrange to personally meet them upon arrival to expedite their entry and get them settled quickly.",
    keyTakeaways: [
      "Partnership approach: I worked with the visiting team operations staff collaboratively rather than dictating a solution, strengthening our professional relationship",
      "Proactive communication: All affected parties were immediately notified with clear information about timeline changes and what it meant for them",
      "Team-focused problem solving: My solutions centered on what the team needed (court time, meals, smooth entry) rather than what was easiest for the venue",
      "Cross-functional coordination: I served as the liaison between the visiting team, our facility operations, and our basketball staff to align everyone quickly"
    ],
    outcome: "The Aces arrived safely, had their locker room ready immediately, and completed their shootaround without stress. Their operations coordinator thanked me specifically for the smooth coordination and flexibility. This experience taught me the value of having pre-established contingency plans for common issues like flight delays. I now maintain a reference document with backup court time slots and emergency contact protocols that I can activate quickly when similar situations arise. Building strong relationships with operations staff across the league and maintaining flexible, team-first thinking has become a cornerstone of how I approach every game day."
  };

  const phase = phases[currentPhase];

  const Icon = ({ name }) => {
    const icons = {
      Calendar: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
      ClipboardCheck: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
      MapPin: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      Users: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      Clock: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      CheckCircle: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    };
    return icons[name];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Team Operations Coordination Plan</h1>
              <p className="text-xl text-gray-700">Dallas Wings vs. Las Vegas Aces</p>
              <p className="text-gray-600 mt-1">College Park Center • Sunday, 7:00 PM Tip-off</p>
            </div>
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='48' fill='%230C2340' stroke='%23C4D600' stroke-width='2'/%3E%3Ctext x='50' y='62' font-family='Arial' font-size='42' font-weight='bold' fill='%23C4D600' text-anchor='middle'%3EDW%3C/text%3E%3C/svg%3E" alt="Dallas Wings" className="w-24 h-24" />
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Project Overview</h3>
                <p className="text-blue-800 text-sm">This coordination plan demonstrates my understanding of the Team Operations Coordinator role in professional basketball. My focus is on supporting players, coaches, and basketball staff by managing team logistics, coordinating with visiting teams, and serving as the liaison between basketball operations and other departments to ensure seamless game day execution.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Game Day Timeline</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {phases.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handlePhaseChange(idx)}
                className={`p-3 rounded-lg text-sm font-medium transition-all ${
                  currentPhase === idx
                    ? `${p.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="text-xs opacity-90">{p.time.split(',')[0]}</div>
                <div className="font-bold mt-1">{p.title.split(':')[0]}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className={`${phase.color} p-4 rounded-lg`}>
              <Icon name={phase.icon} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{phase.title}</h2>
              <p className="text-gray-600 flex items-center gap-2 mt-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {phase.time}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-5 mb-6">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              Phase Overview
            </h3>
            <p className="text-gray-700">{phase.overview}</p>
          </div>

          <div className="space-y-5 mb-6">
            <h3 className="font-semibold text-gray-900 text-lg">Key Coordination Priorities</h3>
            {phase.keyPriorities.map((priority, idx) => (
              <div key={idx} className="border-l-4 border-blue-500 pl-5">
                <h4 className="font-semibold text-gray-900 mb-2">{priority.area}</h4>
                <ul className="space-y-2">
                  {priority.tasks.map((task, tidx) => (
                    <li key={tidx} className="flex items-start gap-2 text-gray-700">
                      <svg className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5">
            <h3 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              Role Insight
            </h3>
            <p className="text-yellow-900">{phase.insight}</p>
          </div>
        </div>

        {currentPhase === 2 && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Crisis Management Example</h3>
                <p className="text-gray-600">See how I handle unexpected coordination challenges</p>
              </div>
              <button
                onClick={() => setShowScenario(!showScenario)}
                className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {showScenario ? 'Hide' : 'View'} Case Study
              </button>
            </div>
          </div>
        )}

        {showScenario && currentPhase === 2 && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-500 p-3 rounded-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{caseStudy.title}</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Situation</h3>
                <p className="text-gray-700 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">{caseStudy.situation}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">Immediate Actions Taken</h3>
                <div className="space-y-2">
                  {caseStudy.immediateActions.map((action, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
                        {idx + 1}
                      </div>
                      <p className="text-gray-700">{action}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Solution Implemented</h3>
                <p className="text-gray-700 bg-green-50 p-4 rounded-lg border-l-4 border-green-500">{caseStudy.solutionImplemented}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">Key Takeaways</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {caseStudy.keyTakeaways.map((takeaway, idx) => (
                    <div key={idx} className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-gray-800"><span className="font-semibold text-blue-900">{takeaway.split(':')[0]}:</span> {takeaway.split(':')[1]}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Outcome</h3>
                <p className="text-gray-700 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">{caseStudy.outcome}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between">
          <button
            onClick={() => handlePhaseChange(Math.max(0, currentPhase - 1))}
            disabled={currentPhase === 0}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
          >
            ← Previous Phase
          </button>
          <button
            onClick={() => handlePhaseChange(Math.min(phases.length - 1, currentPhase + 1))}
            disabled={currentPhase === phases.length - 1}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
          >
            Next Phase →
          </button>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<GameDayPresentation />, document.getElementById('root'));
