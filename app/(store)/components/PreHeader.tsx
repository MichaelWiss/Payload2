export default function PreHeader() {
  return (
    <div
      className="announcement mono caps"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '.5rem 1rem',
        background: 'linear-gradient(90deg,var(--hot-pink),var(--acid-lime))',
        borderBottom: '3px solid var(--ink)',
        fontSize: '.85rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '.08em',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      ✨ Spring Collection Live • Free Ship $75+ • Shop Handmade Goods ✨
    </div>
  )
}
