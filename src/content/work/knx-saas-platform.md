---
title: KNX Technologies — Building a Dance-Community SaaS Platform
description: "Flagship product ownership case study: building a production platform for discovery, event operations, and community connection."
organization: KNX Technologies
role: Founder & Product Owner
publishDate: 2026-01-01
tags: [Product ownership, React, Supabase, PostgreSQL, Stripe Connect]
accent: violet
---

## Product opportunity

Social-dance scenes are distributed across event registries, social posts, studio pages, and word of mouth. Dancers need a clearer way to find local nights, events, instructors, and communities; organizers need one place to publish events, manage registration, sell tickets, and communicate with their community. My firsthand involvement in dance communities informed this product insight.

The live platform is available at [knx-go.com](https://knx-go.com).

<figure class="case-image">
  <img src="/images/knx/community-discovery.png" width="1440" height="900" loading="lazy" decoding="async" alt="KNX discovery home screen with dancers, a Browse Events call to action, and category choices" />
  <figcaption>Discovery starts with a clear path to events, local nights, instructors, and communities.</figcaption>
</figure>

## My role

As founder and product owner, I set the product vision, roadmap, priorities, requirements, and user experience. I also lead the hands-on architecture, data modeling, integrations, deployment, production support, and iteration across a React/Vite, Supabase/PostgreSQL, React Query, and Stripe Connect stack. Operationally, I maintain the platform’s moderation, administration, community guidelines, and safety policy work.

## Target users and their needs

| User | Need | KNX response |
| --- | --- | --- |
| Dancers and visitors | Find nights, events, and people nearby | Public discovery for events, local nights, communities, and instructors without requiring login |
| Members | Follow scenes, buy tickets, and keep activity in one place | Accounts, ticket purchase, community following, and messaging |
| Organizers, community leaders, instructors, and event directors | Publish and manage listings; sell registration | Create-or-claim listings, event pages, registration, updates, and Stripe Connect payments |
| KNX administrators | Keep the platform trustworthy | Moderation, administration, and operational tools |

<figure class="case-image case-image-narrow">
  <img src="/images/knx/role-flow.png" width="752" height="1068" loading="lazy" decoding="async" alt="KNX role flow from visitor to member, organizer, and administrator" />
  <figcaption>Role progression makes public discovery easy while unlocking additional capabilities for members, organizers, and administrators.</figcaption>
</figure>

## Discovery and prioritization

I turn organizer and participant friction into prioritized requirements, workflow changes, internal tools, and interface improvements. The work balances technical constraints, reliability, and business needs while focusing on the practical paths users take through discovery, participation, and event operations.

## Key decisions and trade-offs

1. **Seed the supply side rather than waiting for it.** KNX can publish listings from an external registry and lets organizers claim them. This gives dancers a useful calendar from day one and gives organizers a ready-made page to take over. The trade-off is data freshness, addressed with a clear notice that visitors should confirm important information with the organizer.
2. **Keep discovery public; require login for actions.** Browsing, event details, share links, and QR codes stay public. Accounts are needed to buy, follow, or message, reducing friction for a first visit while supporting action-oriented workflows.
3. **Lower the barrier to organizer participation.** Free create-or-claim listings make it easier for community leaders, instructors, and event directors to participate. Stripe Connect supports organizer payments and ticketing.
4. **Design for mobile event use.** Persistent mobile navigation supports dancers checking events and community information while they are out.
5. **Build trust and safety into the product.** Terms of Service, Community Guidelines, Safety Policy, Privacy Policy, and moderation tooling are part of the platform rather than an afterthought.
6. **Support multiple event views.** Regional, international, and all-event filters can be viewed as cards, maps, or calendars to match different planning needs.

<figure class="case-image">
  <img src="/images/knx/events-discovery.png" width="1440" height="900" loading="lazy" decoding="async" alt="KNX events screen showing filters and event cards" />
  <figcaption>Event discovery supports filters and card, map, and calendar views.</figcaption>
</figure>

<figure class="case-image case-image-narrow">
  <img src="/images/knx/event-detail-mobile.png" width="780" height="1688" loading="lazy" decoding="async" alt="KNX mobile event detail screen with tags and external listing notice" />
  <figcaption>Mobile event detail view for a claimable external listing, including a clear information-status notice.</figcaption>
</figure>

## Architecture and technical implementation

The front end is a React and Vite single-page application. React Query handles server-state caching and request consolidation. Supabase provides PostgreSQL, authentication, and storage for data covering events, communities, instructors, ticketing and fulfillment, roles and permissions, messaging, moderation, and administration. Stripe Connect supports organizer payments and ticketing. Vercel hosts the application.

<figure class="case-image">
  <img src="/images/knx/platform-architecture.png" width="2608" height="440" loading="lazy" decoding="async" alt="High-level KNX architecture connecting user roles, React application, Stripe Connect, external registry, and Supabase" />
  <figcaption>High-level platform architecture connecting user workflows, the application, payments, external listings, and Supabase services.</figcaption>
</figure>

## Delivery approach

KNX is a live product that I iterate continuously. Delivery has spanned discovery, role-based dashboards, registration and ticketing, Stripe Connect, messaging, administration, QR flows, and claimable listings. I use AI-assisted engineering for investigation, implementation, testing, debugging, documentation, and release validation while retaining product and technical decision ownership.

## Outcomes and future opportunities

KNX is in production with discovery, role-based workflows, ticketing and payments, messaging, moderation, and administration capabilities. The next opportunities include helping more organizers claim existing listings, expanding local-night coverage, and evaluating organizer analytics.
