// Network of people shown in the hero.
// x, y = position as a % of the network area (0 to 100); size = width as a % of the area.
// The FIRST item is the centre node: the main person. Clicking it sends out the light.
//
// TO ADD AN IMAGE TO A NODE: put a square image in public/network/ and set src, for example
//   { name: "Contact 3", x: 30.9, y: 57.3, size: 12.5, src: "/network/contact-3.jpg" }
// Nodes without src show a placeholder avatar.

// links (optional): names of other nodes to connect this one to by hand, on top of the automatic lines.
export type NetNode = {
  name: string;
  x: number; // % from the left
  y: number; // % from the top
  size: number; // icon width as % of the network
  src?: string;
  links?: string[];
};

export const nodes: NetNode[] = [
  { name: "Jeffrey", x: 49.4, y: 50, size: 15, src: "/network/jefferey.jpg" }, // 0 centre
  { name: "Node 1", x: 49, y: 11.9, size: 12.5, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7tau4HovORLF9W05jnQZr8Jw3jqiNdJxRyVg-A9EVWQ&s=10" }, // top big
  { name: "Node 2", x: 30, y: 11, size: 7.8, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2JjyyfQQF4L0VCHYUET48jeY0onYbzyztojTfke6fVA&s=10" }, // top-left small
  { name: "Node 3", x: 72.5, y: 11.9, size: 7.5, src: "" }, // top-right small
  { name: "Node 4", x: 35.9, y: 21, size: 7.8, src: "public/network/black.jpg" },
  { name: "Node 5", x: 18.5, y: 25.6, size: 10.6, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJL9qu5FRd8ZKP-cw0v1_B2Agq4D6T-VBGgmtzKYHSw&s=10" }, // upper-left large
  { name: "Node 6", x: 53.4, y: 29.4, size: 13, src: "public/network/female.jpg" }, // above centre
  { name: "Node 7", x: 80.6, y: 26, size: 12, src: "public/network/tech bro.jpg" }, // upper-right large
  { name: "Node 8", x: 67.3, y: 23.4, size: 7, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNOxKqisEy-Q-rIIjrwVYeyuWBDk9gpkL4Vb5hKspsQ&s=10" },
  { name: "Node 9", x: 34.8, y: 36.5, size: 12.5, src: "public/network/female3.jpg" },
  { name: "Node 10", x: 7.5, y: 41.3, size: 6, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTphqb-uiEsGWzvjW3NKDFj69lJfU4FJojPYIaAJfrJkw&s=10" }, // far left small
  { name: "Node 11", x: 19.5, y: 43.1, size: 11.5, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmrPl6rA0iqbnNKiors2T_Xzjmfzkk3TdoDDCJTz1Acg&s=10" },
  { name: "Node 12", x: 68.1, y: 41, size: 12, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73uIhheAgg8omVPo6-iEFPyehKljd_0wDZfhNmdSdfA&s=10" },
  { name: "Node 13", x: 81.5, y: 41.9, size: 5.7, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8sxiMcnnQ5eNL7reM20sRq7N1LAYsEu32XXEl1ZNx9g&s=10" },
  { name: "Node 14", x: 90.6, y: 38.8, size: 8, src: "public/network/suit gang.jpg" }, // far right upper
  { name: "Node 15", x: 30.9, y: 57.3, size: 12, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSltmwLjmKh3i9RgNEfxJz2pZBXITNsioUlP0l0kTFtaQ&s=10" },
  { name: "Node 16", x: 9.8, y: 58.4, size: 9.8, src: "public/network/costumer service.jpg" }, // far left lower
  { name: "Node 17", x: 64.8, y: 61.5, size: 12, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8j5ENRUM5q57jBKz38dMMuM3A8x2G9Ohzqx6tVfz5Q&s=10" },
  { name: "Node 18", x: 79.6, y: 56.3, size: 11.5, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSoVsNwoSZtQG9qtQ1m1-DC0PVELZGzezRn8e_IYMk2w&s=10" },
  { name: "Node 19", x: 91.8, y: 58.1, size: 7.2, src: "public/network/female2.jpg" }, // far right lower
  { name: "Node 20", x: 41, y: 70.6, size: 12, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFiB_1-BxiKqm9k3LLR9PP5tS5XLJ0WaXuwnUx1_Z3DA&s=10" },
  { name: "Node 21", x: 18.8, y: 74, size: 13.7, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJASeFSKSuCUkqB89hdZiyxh7og80XprsniCqh05jJ6Q&s=10" }, // bottom-left large
  { name: "Node 22", x: 80, y: 75.4, size: 14, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanVpBoCcqxscr46uc9Z9M7eWfyHqfYjR7sKQhXKcU1Q&s=10" }, // bottom-right large
  { name: "Node 23", x: 58.5, y: 77.1, size: 10, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtjnw26WRNgch_qDbG1GtzA9OLoQY8RENSQEHcOFh-_A&s=10" },
  { name: "Node 24", x: 44, y: 86.9, size: 13, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnDieRNdbJQ0qM_RpXFEXc1jNjG_p24GVBcPT07vtozQ&s=10" }, // bottom centre
  { name: "Node 25", x: 26.5, y: 88.3, size: 6.5, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLac6S729noPACy6_MwLjYaEMZOKEgL5OGT8ZIyY70vw&s=10" },
  { name: "Node 26", x: 69.1, y: 87.8, size: 7, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5g_6u-vPPgGr35NQ0gyRymyuiuipxR-K1eXhIhQs5hA&s=10" },
];

// THE CONNECTIONS. Each pair is [icon, icon] using the numbers above.
// Add a pair to draw a line, delete a pair to remove one.
export const EDGES: [number, number][] = [
  // Outer ring
  [5, 2], [2, 1], [1, 3], [3, 7], [7, 14], [14, 19], [19, 22],
  [22, 26], [26, 24], [24, 25], [25, 21], [21, 16], [16, 10], [10, 5],
  // From the centre
  [0, 6], [0, 9], [0, 12], [0, 15], [0, 17], [0, 20],
  // Top
  [6, 1], [6, 4], [6, 8], [6, 9], [6, 12], [1, 4], [1, 8], [4, 2], [4, 5], [4, 9], [7, 8], [7, 12],
  // Left
  [5, 9], [5, 11], [9, 11], [9, 15], [10, 11], [11, 15], [11, 16], [15, 16], [15, 21], [16, 21],
  // Right
  [12, 13], [12, 18], [13, 14], [14, 18], [17, 18], [18, 19], [18, 22], [12, 17],
  // Bottom
  [15, 20], [17, 20], [17, 22], [17, 23], [20, 21], [20, 23], [20, 24], [21, 24], [22, 23], [23, 24], [23, 26],
];