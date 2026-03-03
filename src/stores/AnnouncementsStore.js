import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useAnnouncementsStore = defineStore('announcements', () => {

  const items = ref([
    {
      title: 'Anúncio 1',
      localization: {
        cidade: 'Joinville',
        uf: 'SC',
        cep: '89207-300',
        logradouro: 'Rua Guanabara',
        numero: '150',
        bairro: 'Guanabara',
      },
      area: 250,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nunc, eget aliquam nisl nunc vel nisl.',
      price: 850000.00,
      images: [
        "/images/casa_1/frente.webp",
        "/images/casa_1/sala.webp",
        "/images/casa_1/quarto.webp",
        "/images/casa_1/cozinha.webp",
        "/images/casa_1/banheiro.webp"
      ],
      comodos: {
        quarto: 3,
        suite: 1,
        banheiro: 2,
        extra1: '1 área externa'
      }
    },
    {
      title: 'Anúncio 2',
      localization: {
        cidade: 'Joinville',
        uf: 'SC',
        cep: '89207-300',
        logradouro: 'Rua Guanabara',
        numero: '150',
        bairro: 'Guanabara',
      },
      area: 250,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nunc, eget aliquam nisl nunc vel nisl.',
      price: 850000.00,
      images: [
        "/images/casa_2/frente.webp",
        "/images/casa_2/sala.webp",
        "/images/casa_2/quarto.webp",
        "/images/casa_2/cozinha.webp",
        "/images/casa_2/banheiro.webp"
      ],
      comodos: {
        quarto: 3,
        suite: 1,
        banheiro: 2,
        extra1: '1 área externa'
      }
    },
    {
      title: 'Anúncio 3',
      localization: {
        cidade: 'Joinville',
        uf: 'SC',
        cep: '89207-300',
        logradouro: 'Rua Guanabara',
        numero: '150',
        bairro: 'Guanabara',
      },
      area: 250,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nunc, eget aliquam nisl nunc vel nisl.',
      price: 850000.00,
      images: [
        "/images/casa_2/frente.webp",
        "/images/casa_2/sala.webp",
        "/images/casa_2/quarto.webp",
        "/images/casa_2/cozinha.webp",
        "/images/casa_2/banheiro.webp"
      ],
      comodos: {
        quarto: 3,
        suite: 1,
        banheiro: 2,
        extra1: '1 área externa'
      }
    },
    {
      title: 'Anúncio 4',
      localization: {
        cidade: 'Joinville',
        uf: 'SC',
        cep: '89207-300',
        logradouro: 'Rua Guanabara',
        numero: '150',
        bairro: 'Guanabara',
      },
      area: 250,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nunc, eget aliquam nisl nunc vel nisl.',
      price: 850000.00,
      images: [
        "/images/casa_4/frente.webp",
        "/images/casa_4/sala.webp",
        "/images/casa_4/quarto.webp",
        "/images/casa_4/cozinha.webp",
        "/images/casa_4/banheiro.webp"
      ],
      comodos: {
        quarto: 3,
        suite: 1,
        banheiro: 2,
        extra1: '1 área externa'
      }
    }
  ])

  return { items }
})