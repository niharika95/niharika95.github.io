import React from 'react';
import SelectedWorksLayout from './SelectedWorksLayout';
import Typography from '../../components/Typography';

const chatMessagingData = [
  {
    title: 'AI-Assisted Document Synthesis',
    description: 'A split-screen workspace featuring a contextual AI chat interface positioned alongside generated outputs. Users can seamlessly query, refine, and extract deep insights from their uploaded documents in real-time.',
    type: 'desktop',
    images: [
      '/v2/images/home/selected-works/selected works-chat-and-messaging/BA copilot.png'
    ]
  },
  {
    title: 'Multi-Party Rental Messaging Hub',
    description: 'A unified dashboard pairing a proximity-based vendor directory with an active communication thread. Operational agents can instantly coordinate vehicle availability, request logs, and trigger status approvals directly within the chat view.',
    type: 'desktop',
    images: [
      '/v2/images/home/selected-works/selected works-chat-and-messaging/Vehicle.png'
    ]
  },
  {
    title: 'Multimodal Conversational Event Assistant',
    description: 'A sequential, multi-step chat flow guiding users through rich, media-driven interactions. Users can seamlessly access embedded ticketing, localized food options, and contextual event details, with feedback loops to continuously refine the conversational logic.',
    type: 'mobile',
    images: [
      '/v2/images/home/selected-works/selected works-chat-and-messaging/PBR images - chat & messaging/apps-transparent.png',
      '/v2/images/home/selected-works/selected works-chat-and-messaging/PBR images - chat & messaging/food-transparent.png',
      '/v2/images/home/selected-works/selected works-chat-and-messaging/PBR images - chat & messaging/rating-transparent.png'
    ]
  }
];

export default function SelectedWorksChatMessaging() {
  return (
    <SelectedWorksLayout>
      <div className="selected-works-dashboards">
        <Typography as="h2" variant="h4Medium" className="category-title">
          Chat & Messaging
        </Typography>

        <div className="selected-works-list">
          {chatMessagingData.map((item, index) => (
            <section key={index} className="dashboard-project-item">
              <Typography as="h3" variant="h6Medium" className="project-title">
                {item.title}
              </Typography>
              <Typography as="p" variant="bodyRegular" className="project-description text-gray-900">
                {item.description}
              </Typography>

              {item.type === 'desktop' ? (
                <div className="project-images">
                  {item.images.map((imgSrc, imgIdx) => (
                    <div key={imgIdx} className="dashboard-image-wrapper">
                      <img 
                        src={imgSrc} 
                        alt={`${item.title} preview ${imgIdx + 1}`} 
                        className="dashboard-preview-img"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mobile-ui-grid">
                  {item.images.map((imgSrc, imgIdx) => (
                    <div key={imgIdx} className="mobile-ui-image-wrapper pbr-image-wrapper">
                      <img 
                        src={imgSrc} 
                        alt={`${item.title} preview ${imgIdx + 1}`} 
                        className="dashboard-preview-img"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </SelectedWorksLayout>
  );
}
