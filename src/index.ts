/**
 * tldraw - A fork of tldraw/tldraw
 * Main entry point for the application
 */

import { Tldraw, TldrawProps } from './components/Tldraw'
import { TldrawEditor, TldrawEditorProps } from './components/TldrawEditor'
import { useEditor } from './hooks/useEditor'
import { useValue } from './hooks/useValue'
import type { Editor } from './editor/Editor'
import type { TLShape, TLShapeId } from './types/shapes'
import type { TLRecord } from './types/records'
import type { StoreSnapshot } from './types/store'

// Core components
export { Tldraw, TldrawEditor }
export type { TldrawProps, TldrawEditorProps }

// Hooks
export { useEditor, useValue }

// Editor
export type { Editor }

// Types
export type { TLShape, TLShapeId, TLRecord, StoreSnapshot }

// Version info
export const version = '0.1.0'
