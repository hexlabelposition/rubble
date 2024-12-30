import React from 'react'

// UI
import Link from '@ui/Link'
import Typography from '@ui/Typography'

export default function FooterNavigation(): React.ReactNode {
  return (
    <div className="grid-rows-auto grid grid-cols-[105px_1fr_105px_1fr] gap-y-6 laptop:grid-cols-4 laptop:grid-rows-1">
      <div className="col-start-1 row-start-1 laptop:col-start-auto laptop:row-start-auto">
        <Typography
          tag="p"
          className="mb-5 text-xs font-semibold text-primary-500"
        >
          Company
        </Typography>

        <div className="flex flex-col gap-4">
          <Link as="internal" to="/blog">
            <Typography
              tag="span"
              className="text-xs font-medium text-secondary-500"
            >
              Blog
            </Typography>
          </Link>
          <Link as="internal" to="/careers">
            <Typography
              tag="span"
              className="text-xs font-medium text-secondary-500"
            >
              Carrers
            </Typography>
          </Link>
          <Link as="internal" to="/contact">
            <Typography
              tag="span"
              className="text-xs font-medium text-secondary-500"
            >
              Contact
            </Typography>
          </Link>
          <Link as="internal" to="/about">
            <Typography
              tag="span"
              className="text-xs font-medium text-secondary-500"
            >
              About Us
            </Typography>
          </Link>
        </div>
      </div>

      <div className="col-start-3 row-start-1 laptop:col-start-auto laptop:row-start-auto">
        <Typography
          tag="p"
          className="mb-5 text-xs font-semibold text-primary-500"
        >
          Social Media
        </Typography>

        <div className="flex flex-col gap-4">
          <Link as="external" href="https://twitter.com">
            <Typography
              tag="span"
              className="text-xs font-medium text-secondary-500"
            >
              Twitter
            </Typography>
          </Link>
          <Link as="external" href="https://linkedin.com">
            <Typography
              tag="span"
              className="text-xs font-medium text-secondary-500"
            >
              LinkedIn
            </Typography>
          </Link>
          <Link as="external" href="https://facebook.com">
            <Typography
              tag="span"
              className="text-xs font-medium text-secondary-500"
            >
              Facebook
            </Typography>
          </Link>
          <Link as="external" href="https://instagram.com">
            <Typography
              tag="span"
              className="text-xs font-medium text-secondary-500"
            >
              Instagram
            </Typography>
          </Link>
        </div>
      </div>

      <div className="col-start-1 row-start-2 laptop:col-start-auto laptop:row-start-auto">
        <Typography
          tag="p"
          className="mb-5 text-xs font-semibold text-primary-500"
        >
          Services
        </Typography>

        <div className="flex flex-col gap-4">
          <Link as="internal" to="/property">
            <Typography
              tag="span"
              className="text-xs font-medium text-secondary-500"
            >
              Buy Property
            </Typography>
          </Link>
          <Link as="internal" to="/property">
            <Typography
              tag="span"
              className="text-xs font-medium text-secondary-500"
            >
              Sell Property
            </Typography>
          </Link>
          <Link as="internal" to="/property">
            <Typography
              tag="span"
              className="text-xs font-medium text-secondary-500"
            >
              Rent Property
            </Typography>
          </Link>
          <Link as="internal" to="/agent">
            <Typography
              tag="span"
              className="text-xs font-medium text-secondary-500"
            >
              Property Agent
            </Typography>
          </Link>
        </div>
      </div>

      <div className="col-start-3 row-start-2 laptop:col-start-auto laptop:row-start-auto">
        <Typography
          tag="p"
          className="mb-5 text-xs font-semibold text-primary-500"
        >
          Contact
        </Typography>

        <div className="flex flex-col gap-4">
          <Link as="internal" to="/contact">
            <Typography
              tag="span"
              className="text-xs font-medium text-secondary-500"
            >
              Chat Our Support
            </Typography>
          </Link>
          <Link as="external" href="mailto:rubble@gmail.com">
            <Typography
              tag="span"
              className="text-xs font-medium text-secondary-500"
            >
              rubble@gmail.com
            </Typography>
          </Link>
          <Link as="external" href="tel:+1-814-637-1529">
            <Typography
              tag="span"
              className="text-xs font-medium text-secondary-500"
            >
              +1 814 637 1529
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  )
}
