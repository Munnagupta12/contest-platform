const leaderboard = [

  {
    rank: 1,
    username: "Aman",
    solved: 320,
    score: 2450,
  },

  {
    rank: 2,
    username: "Rahul",
    solved: 280,
    score: 2200,
  },

  {
    rank: 3,
    username: "Priya",
    solved: 250,
    score: 2100,
  },

  {
    rank: 4,
    username: "Karan",
    solved: 210,
    score: 1900,
  },

  {
    rank: 5,
    username: "Neha",
    solved: 180,
    score: 1700,
  },

];



export default function LeaderboardPage() {

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        color: "white",
        padding: "40px",
      }}
    >

      {/* TITLE */}
      <h1
        style={{
          fontSize: "52px",
          marginBottom: "40px",
        }}
      >
        Leaderboard
      </h1>



      {/* TABLE */}
      <div
        style={{
          background: "#111",
          borderRadius: "15px",
          overflow: "hidden",
          border: "1px solid #222",
        }}
      >

        {/* HEADER */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "1fr 3fr 2fr 2fr",

            padding: "20px",
            background: "#1a1a1a",
            fontWeight: "bold",
            borderBottom: "1px solid #333",
          }}
        >

          <div>Rank</div>

          <div>User</div>

          <div>Solved</div>

          <div>Score</div>

        </div>



        {/* ROWS */}
        {leaderboard.map((user) => (

          <div
            key={user.rank}
            style={{
              display: "grid",
              gridTemplateColumns:
                "1fr 3fr 2fr 2fr",

              padding: "20px",
              borderBottom: "1px solid #222",
              alignItems: "center",
            }}
          >

            {/* RANK */}
            <div
              style={{
                fontWeight: "bold",
                color:
                  user.rank === 1
                    ? "gold"
                    : user.rank === 2
                    ? "silver"
                    : user.rank === 3
                    ? "#cd7f32"
                    : "white",
              }}
            >
              #{user.rank}
            </div>



            {/* USERNAME */}
            <div
              style={{
                fontSize: "18px",
              }}
            >
              {user.username}
            </div>



            {/* SOLVED */}
            <div
              style={{
                color: "#00ff99",
              }}
            >
              {user.solved}
            </div>



            {/* SCORE */}
            <div
              style={{
                color: "#3b82f6",
              }}
            >
              {user.score}
            </div>

          </div>

        ))}

      </div>

    </div>

  );
}