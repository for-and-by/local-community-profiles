import {LngLatLike} from 'maplibre-gl'

export interface FormCreateValues {
  location: {
    coordinates: LngLatLike
    address: string
  }
  custom: {
    [key: string]: string
  }
  image: string
  severity: string
  type: string
  details: string
}

export interface FormUpdateValues {
  id: string
  custom?: {
    [key: string]: string
  }
  image?: string
  severity?: string
  type?: string
  details?: string
}

export enum CATEGORIES {
  NATURAL = 'natural',
  INFRASTRUCTURE = 'infrastructure',
}

export enum TYPES {
  CYCLIST = 'cyclist',
  MOTORIST = 'motorist',
  WILDLIFE = 'wildlife',
  BUSHFIRE = 'bushfire',
  FLOOD = 'flood',
  PEDESTRIAN = 'pedestrian',
}

export enum SEVERITIES {
  NONE = 'none',
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export interface Category {
  handle: CATEGORIES
  title: string
}

export interface Type {
  handle: TYPES
  title: string
  category_handle: CATEGORIES
  image_required: boolean
  custom_fields: {
    [key: string]: string
  }
  verify_by: number
  expire_by: number
}

export interface Severity {
  handle: SEVERITIES
  title: string
}

export interface Report {
  id?: number
  lng: number
  lat: number
  type_handle: TYPES
  content_id?: number
  created_at?: string
  updated_at?: string
  verified_at?: string
}

export interface ReportContent {
  id?: number
  report_id: number
  details: string
  data: {
    [key: string]: string | number | undefined
  }
  image_url?: string
  severity_handle: SEVERITIES
  is_deleted?: boolean
  created_at?: string
}

export interface ReportVotes {
  id?: number
  report_id: number
  upvotes: number
  downvotes: number
}

export interface ReportSummary extends Pick<Report, 'id' | 'lng' | 'lat' | 'updated_at'> {
  type: Pick<Type, 'title' | 'verify_by'>
  content: {
    image_url: ReportContent['image_url']
    severity: Pick<Severity, 'title'>
  }
}

export interface ReportFull extends Report {
  content: ReportContent & {
    severity: Severity
  }
  type: Type
}

export interface ReportResult extends Report {
  content?: Partial<ReportContent>
}
