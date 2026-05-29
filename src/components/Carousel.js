export default function Carousel({ children, title }) {
  return (
    <div
      style={{
        width: "100%",
        padding: "20px",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
          color: "#333",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: "flex",
          gap: "15px",
          overflowX: "auto",
          paddingBottom: "10px",
          scrollSnapType: "x mandatory",
           scrollbarWidth: "none",
        }}
      >
        {children}
      </div>
    </div>
  );
}
