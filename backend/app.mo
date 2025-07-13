actor {
  public query func play(player1: Text, player2: Text) : async Text {
    if (player1 == player2) {
      return "🤝 Seri!";
    } else if (
      (player1 == "gunting" and player2 == "kertas") or
      (player1 == "batu" and player2 == "gunting") or
      (player1 == "kertas" and player2 == "batu")
    ) {
      return "🎉 Kamu Menang!";
    } else {
      return "😢 Kamu Kalah!";
    };
  };
};
