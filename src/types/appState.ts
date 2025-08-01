export interface Vehicle {
  id: string;
  name: string;
  // Add other vehicle properties as needed
}

export interface Cyberhack {
  id: string;
  name: string;
  // Add other cyberhack properties as needed
}

export interface Weapon {
  id: string;
  name: string;
  // Add other weapon properties as needed
}

export interface AppState {
  vehicles: Vehicle[];
  cyberhacks: Cyberhack[];
  weapons: Weapon[];
}
