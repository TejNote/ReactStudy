export function Profile() {
  return (
    <div>
      <img
        src="https://phinf.pstatic.net/contact/20230116_274/1673857072753Jp4T4_PNG/avatar_profile.png?type=s160"
        alt="Profile"
      />
    </div>
  );
}

export function Gallery() {
  return (
    <section>
      <h1>갤러리</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
