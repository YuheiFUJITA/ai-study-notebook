---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const organizers = [
  {
    avatar: 'https://github.com/YuheiFUJITA.png',
    name: 'Yuhei FUJITA',
    title: 'Organizer',
    links: [
      { icon: 'github', link: 'https://github.com/YuheiFUJITA' },
    ]
  },
]

const members = [
  {
    avatar: 'https://github.com/YuheiFUJITA.png',
    name: 'Yuhei FUJITA',
    title: 'Writer',
    links: [
      { icon: 'github', link: 'https://github.com/YuheiFUJITA' },
    ]
  },
]
</script>



<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      運営メンバー
    </template>
    <template #lead>
      このノートブックは以下のメンバーによって運営されています。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="organizers"
  />
  <VPTeamMembers
    size="small"
    :members="members"
  />
</VPTeamPage>
