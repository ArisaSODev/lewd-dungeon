//decoder number-image
type TerrainInfo = {
  terrain: string;
  walkable: boolean;
};

export const TTable: Record<number, TerrainInfo> = {
  0: { terrain: "ground", walkable: true },
  1: { terrain: "wall", walkable: false }
};

