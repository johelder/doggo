import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

import { FeederDomain } from '@data';

export const mockedFeedersList: FeederDomain[] = [
  {
    id: 'mocked-id-1',
    address: {
      city: 'Petrolina',
      houseNumber: '12',
      neighborhood: 'Dom Avelar',
      street: 'Rua do Galo-de-Campina',
      complement: '',
      reference: '',
    },
    coordinates: {
      longitude: -40.48879852518439,
      latitude: -9.36222691795951,
    },
    foods: {
      others: false,
      dog: true,
      cat: false,
    },
    maintenanceStatus: {
      supply: {
        updatedAt: {
          seconds: 1705174420,
          nanoseconds: 327000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
      cleaning: {
        updatedAt: {
          seconds: 1705174420,
          nanoseconds: 327000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
    },
    user: {
      id: 'mocked-id-1',
      name: 'yals',
    },
  },
  {
    id: 'mocked-id-2',
    address: {
      city: 'Petrolina',
      houseNumber: '222',
      neighborhood: 'Dom Avelar',
      street: 'Rua das Ovelhas',
      complement: '',
      reference: '',
    },
    coordinates: {
      longitude: -40.49286609515548,
      latitude: -9.36024469806096,
    },
    foods: {
      others: true,
      dog: true,
      cat: false,
    },
    maintenanceStatus: {
      supply: {
        updatedAt: {
          seconds: 1705174132,
          nanoseconds: 209000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
      cleaning: {
        updatedAt: {
          seconds: 1705174132,
          nanoseconds: 209000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
    },
    user: {
      id: 'mocked-id-1',
      name: 'yals',
    },
  },
  {
    id: 'mocked-id-3',
    address: {
      city: 'Petrolina',
      houseNumber: '90',
      neighborhood: 'Antonio Cassimiro',
      street: 'Rua Açucena',
      complement: '',
      reference: '',
    },
    coordinates: {
      longitude: -40.50737885758281,
      latitude: -9.359262185009129,
    },
    foods: {
      others: false,
      dog: false,
      cat: true,
    },
    maintenanceStatus: {
      supply: {
        updatedAt: {
          seconds: 1705174358,
          nanoseconds: 21000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
      cleaning: {
        updatedAt: {
          seconds: 1705174358,
          nanoseconds: 21000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
    },
    user: {
      id: 'mocked-id-1',
      name: 'yals',
    },
  },
  {
    id: 'mocked-id-4',
    address: {
      city: 'Petrolina',
      houseNumber: '12',
      neighborhood: 'Cidade Jardim',
      street: 'Rua do Vermelho',
      complement: '222',
      reference: '444',
    },
    coordinates: {
      longitude: -40.49857350066304,
      latitude: -9.382112337413826,
    },
    foods: {
      others: false,
      dog: false,
      cat: true,
    },
    maintenanceStatus: {
      supply: {
        updatedAt: {
          seconds: 1705174096,
          nanoseconds: 612000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
      cleaning: {
        updatedAt: {
          seconds: 1705174096,
          nanoseconds: 612000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
    },
    user: {
      id: 'mocked-id-1',
      name: 'yals',
    },
  },
  {
    id: 'mocked-id-5',
    address: {
      city: 'Petrolina',
      houseNumber: '1',
      neighborhood: 'Dom Avelar',
      street: 'Rua da Opala',
      complement: '',
      reference: '',
    },
    coordinates: {
      longitude: -40.49822514876723,
      latitude: -9.35747314401082,
    },
    foods: {
      others: false,
      dog: true,
      cat: false,
    },
    maintenanceStatus: {
      supply: {
        updatedAt: {
          seconds: 1705026324,
          nanoseconds: 150000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
      cleaning: {
        updatedAt: {
          seconds: 1705026324,
          nanoseconds: 150000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
    },
    user: {
      id: 'mocked-id-1',
      name: 'yals',
    },
  },
  {
    id: 'mocked-id-6',
    address: {
      city: 'Petrolina',
      houseNumber: '1111',
      neighborhood: 'Jardim Sao Paulo',
      street: 'Rua Trinta e Sete Lot Quati II',
      complement: 'aaaa',
      reference: '3333',
    },
    coordinates: {
      longitude: -40.53571404889226,
      latitude: -9.364638184566223,
    },
    foods: {
      others: true,
      dog: true,
      cat: true,
    },
    maintenanceStatus: {
      supply: {
        updatedAt: {
          seconds: 1705174063,
          nanoseconds: 441000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
      cleaning: {
        updatedAt: {
          seconds: 1705174063,
          nanoseconds: 441000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
    },
    user: {
      id: 'mocked-id-1',
      name: 'yals',
    },
  },
  {
    id: 'mocked-id-7',
    address: {
      city: 'Petrolina',
      houseNumber: '123',
      neighborhood: 'Dom Avelar',
      street: 'Rua da Opala',
      complement: '',
      reference: '111',
    },
    coordinates: {
      longitude: -40.498663019388914,
      latitude: -9.357687842649273,
    },
    foods: {
      others: false,
      dog: true,
      cat: false,
    },
    maintenanceStatus: {
      supply: {
        updatedAt: {
          seconds: 1704945293,
          nanoseconds: 525000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
      cleaning: {
        updatedAt: {
          seconds: 1704945293,
          nanoseconds: 525000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
    },
    user: {
      id: 'mocked-id-1',
      name: 'yals',
    },
  },
  {
    id: 'mocked-id-8',
    address: {
      city: 'Petrolina',
      houseNumber: '12',
      neighborhood: 'Dom Avelar',
      street: 'Rua do Fosfato',
      complement: '',
      reference: '',
    },
    coordinates: {
      longitude: -40.500204619020224,
      latitude: -9.36045443731885,
    },
    foods: {
      others: false,
      dog: true,
      cat: false,
    },
    maintenanceStatus: {
      supply: {
        updatedAt: {
          seconds: 1705157219,
          nanoseconds: 290000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
      cleaning: {
        updatedAt: {
          seconds: 1705157219,
          nanoseconds: 290000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
    },
    user: {
      id: 'mocked-id-1',
      name: 'yals',
    },
  },
  {
    id: 'mocked-id-9',
    address: {
      city: 'Juazeiro',
      houseNumber: '12',
      neighborhood: 'Juazeiro',
      street: 'Rua sem nome',
      complement: '',
      reference: '333',
    },
    coordinates: {
      longitude: -40.5319475568831,
      latitude: -9.420890138332114,
    },
    foods: {
      others: false,
      dog: true,
      cat: false,
    },
    maintenanceStatus: {
      supply: {
        updatedAt: {
          seconds: 1705174118,
          nanoseconds: 342000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
      cleaning: {
        updatedAt: {
          seconds: 1705174118,
          nanoseconds: 342000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
    },
    user: {
      id: 'mocked-id-1',
      name: 'yals',
    },
  },
  {
    id: 'mocked-id-10',
    address: {
      city: 'Petrolina',
      houseNumber: '12',
      neighborhood: 'Dom Avelar',
      street: 'Rua do Mármore',
      complement: '',
      reference: '',
    },
    coordinates: {
      longitude: -40.49583027139306,
      latitude: -9.35207420709293,
    },
    foods: {
      others: true,
      dog: true,
      cat: true,
    },
    maintenanceStatus: {
      supply: {
        updatedAt: {
          seconds: 1705174392,
          nanoseconds: 776000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
      cleaning: {
        updatedAt: {
          seconds: 1705174392,
          nanoseconds: 776000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
    },
    user: {
      id: 'mocked-id-1',
      name: 'yals',
    },
  },
  {
    id: 'mocked-id-11',
    address: {
      city: 'Petrolina',
      houseNumber: '112',
      neighborhood: 'Dom Avelar',
      street: 'Rua Rubi',
      complement: '',
      reference: '',
    },
    coordinates: {
      longitude: -40.494101252406836,
      latitude: -9.350303324300995,
    },
    foods: {
      others: false,
      dog: true,
      cat: false,
    },
    maintenanceStatus: {
      supply: {
        updatedAt: {
          seconds: 1705174437,
          nanoseconds: 441000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
      cleaning: {
        updatedAt: {
          seconds: 1705174437,
          nanoseconds: 441000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
    },
    user: {
      id: 'mocked-id-1',
      name: 'yals',
    },
  },
  {
    id: 'mocked-id-12',
    address: {
      city: 'Petrolina',
      houseNumber: '123',
      neighborhood: 'Dom Avelar',
      street: 'Rua Maria Madalena de Carvalho',
      complement: '',
      reference: '222',
    },
    coordinates: {
      longitude: -40.4963237978518,
      latitude: -9.358686900825472,
    },
    foods: {
      others: true,
      dog: false,
      cat: true,
    },
    maintenanceStatus: {
      supply: {
        updatedAt: {
          seconds: 1705174453,
          nanoseconds: 766000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
      cleaning: {
        updatedAt: {
          seconds: 1705174453,
          nanoseconds: 766000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
    },
    user: {
      id: 'mocked-id-1',
      name: 'yals',
    },
  },
  {
    id: 'mocked-id-13',
    address: {
      city: 'Petrolina',
      houseNumber: '32a',
      neighborhood: 'Dom Avelar',
      street: 'Rua Canarios',
      complement: '',
      reference: '',
    },
    coordinates: {
      longitude: -40.486973617225885,
      latitude: -9.36029001930309,
    },
    foods: {
      others: false,
      dog: true,
      cat: false,
    },
    maintenanceStatus: {
      supply: {
        updatedAt: {
          seconds: 1705174162,
          nanoseconds: 852000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
      cleaning: {
        updatedAt: {
          seconds: 1705174162,
          nanoseconds: 852000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
    },
    user: {
      id: 'mocked-id-1',
      name: 'yals',
    },
  },
];

export const mockedNearFeedersList: FeederDomain[] = [
  {
    id: 'mocked-id-5',
    address: {
      city: 'Petrolina',
      houseNumber: '1',
      neighborhood: 'Dom Avelar',
      street: 'Rua da Opala',
      complement: '',
      reference: '',
    },
    coordinates: {
      longitude: -40.49822514876723,
      latitude: -9.35747314401082,
    },
    foods: {
      others: false,
      dog: true,
      cat: false,
    },
    maintenanceStatus: {
      supply: {
        updatedAt: {
          seconds: 1705026324,
          nanoseconds: 150000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
      cleaning: {
        updatedAt: {
          seconds: 1705026324,
          nanoseconds: 150000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
    },
    user: {
      id: 'mocked-id-1',
      name: 'yals',
    },
  },
  {
    id: 'mocked-id-7',
    address: {
      city: 'Petrolina',
      houseNumber: '123',
      neighborhood: 'Dom Avelar',
      street: 'Rua da Opala',
      complement: '',
      reference: '111',
    },
    coordinates: {
      longitude: -40.498663019388914,
      latitude: -9.357687842649273,
    },
    foods: {
      others: false,
      dog: true,
      cat: false,
    },
    maintenanceStatus: {
      supply: {
        updatedAt: {
          seconds: 1704945293,
          nanoseconds: 525000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
      cleaning: {
        updatedAt: {
          seconds: 1704945293,
          nanoseconds: 525000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
    },
    user: {
      id: 'mocked-id-1',
      name: 'yals',
    },
  },
  {
    id: 'mocked-id-12',
    address: {
      city: 'Petrolina',
      houseNumber: '123',
      neighborhood: 'Dom Avelar',
      street: 'Rua Maria Madalena de Carvalho',
      complement: '',
      reference: '222',
    },
    coordinates: {
      longitude: -40.4963237978518,
      latitude: -9.358686900825472,
    },
    foods: {
      others: true,
      dog: false,
      cat: true,
    },
    maintenanceStatus: {
      supply: {
        updatedAt: {
          seconds: 1705174453,
          nanoseconds: 766000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
      cleaning: {
        updatedAt: {
          seconds: 1705174453,
          nanoseconds: 766000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
    },
    user: {
      id: 'mocked-id-1',
      name: 'yals',
    },
  },
  {
    id: 'mocked-id-8',
    address: {
      city: 'Petrolina',
      houseNumber: '12',
      neighborhood: 'Dom Avelar',
      street: 'Rua do Fosfato',
      complement: '',
      reference: '',
    },
    coordinates: {
      longitude: -40.500204619020224,
      latitude: -9.36045443731885,
    },
    foods: {
      others: false,
      dog: true,
      cat: false,
    },
    maintenanceStatus: {
      supply: {
        updatedAt: {
          seconds: 1705157219,
          nanoseconds: 290000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
      cleaning: {
        updatedAt: {
          seconds: 1705157219,
          nanoseconds: 290000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
    },
    user: {
      id: 'mocked-id-1',
      name: 'yals',
    },
  },
  {
    id: 'mocked-id-10',
    address: {
      city: 'Petrolina',
      houseNumber: '12',
      neighborhood: 'Dom Avelar',
      street: 'Rua do Mármore',
      complement: '',
      reference: '',
    },
    coordinates: {
      longitude: -40.49583027139306,
      latitude: -9.35207420709293,
    },
    foods: {
      others: true,
      dog: true,
      cat: true,
    },
    maintenanceStatus: {
      supply: {
        updatedAt: {
          seconds: 1705174392,
          nanoseconds: 776000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
      cleaning: {
        updatedAt: {
          seconds: 1705174392,
          nanoseconds: 776000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
    },
    user: {
      id: 'mocked-id-1',
      name: 'yals',
    },
  },
  {
    id: 'mocked-id-2',
    address: {
      city: 'Petrolina',
      houseNumber: '222',
      neighborhood: 'Dom Avelar',
      street: 'Rua das Ovelhas',
      complement: '',
      reference: '',
    },
    coordinates: {
      longitude: -40.49286609515548,
      latitude: -9.36024469806096,
    },
    foods: {
      others: true,
      dog: true,
      cat: false,
    },
    maintenanceStatus: {
      supply: {
        updatedAt: {
          seconds: 1705174132,
          nanoseconds: 209000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
      cleaning: {
        updatedAt: {
          seconds: 1705174132,
          nanoseconds: 209000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
    },
    user: {
      id: 'mocked-id-1',
      name: 'yals',
    },
  },
  {
    id: 'mocked-id-11',
    address: {
      city: 'Petrolina',
      houseNumber: '112',
      neighborhood: 'Dom Avelar',
      street: 'Rua Rubi',
      complement: '',
      reference: '',
    },
    coordinates: {
      longitude: -40.494101252406836,
      latitude: -9.350303324300995,
    },
    foods: {
      others: false,
      dog: true,
      cat: false,
    },
    maintenanceStatus: {
      supply: {
        updatedAt: {
          seconds: 1705174437,
          nanoseconds: 441000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
      cleaning: {
        updatedAt: {
          seconds: 1705174437,
          nanoseconds: 441000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
    },
    user: {
      id: 'mocked-id-1',
      name: 'yals',
    },
  },
  {
    id: 'mocked-id-3',
    address: {
      city: 'Petrolina',
      houseNumber: '90',
      neighborhood: 'Antonio Cassimiro',
      street: 'Rua Açucena',
      complement: '',
      reference: '',
    },
    coordinates: {
      longitude: -40.50737885758281,
      latitude: -9.359262185009129,
    },
    foods: {
      others: false,
      dog: false,
      cat: true,
    },
    maintenanceStatus: {
      supply: {
        updatedAt: {
          seconds: 1705174358,
          nanoseconds: 21000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
      cleaning: {
        updatedAt: {
          seconds: 1705174358,
          nanoseconds: 21000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
    },
    user: {
      id: 'mocked-id-1',
      name: 'yals',
    },
  },
  {
    id: 'mocked-id-1',
    address: {
      city: 'Petrolina',
      houseNumber: '12',
      neighborhood: 'Dom Avelar',
      street: 'Rua do Galo-de-Campina',
      complement: '',
      reference: '',
    },
    coordinates: {
      longitude: -40.48879852518439,
      latitude: -9.36222691795951,
    },
    foods: {
      others: false,
      dog: true,
      cat: false,
    },
    maintenanceStatus: {
      supply: {
        updatedAt: {
          seconds: 1705174420,
          nanoseconds: 327000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
      cleaning: {
        updatedAt: {
          seconds: 1705174420,
          nanoseconds: 327000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
    },
    user: {
      id: 'mocked-id-1',
      name: 'yals',
    },
  },
  {
    id: 'mocked-id-13',
    address: {
      city: 'Petrolina',
      houseNumber: '32a',
      neighborhood: 'Dom Avelar',
      street: 'Rua Canarios',
      complement: '',
      reference: '',
    },
    coordinates: {
      longitude: -40.486973617225885,
      latitude: -9.36029001930309,
    },
    foods: {
      others: false,
      dog: true,
      cat: false,
    },
    maintenanceStatus: {
      supply: {
        updatedAt: {
          seconds: 1705174162,
          nanoseconds: 852000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
      cleaning: {
        updatedAt: {
          seconds: 1705174162,
          nanoseconds: 852000000,
        } as FirebaseFirestoreTypes.Timestamp,
        updatedBy: {
          userId: 'mocked-id-1',
          userName: 'yals',
        },
      },
    },
    user: {
      id: 'mocked-id-1',
      name: 'yals',
    },
  },
];
