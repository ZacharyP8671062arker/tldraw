/**
 * tldraw - A fork of tldraw/tldraw
 * Main entry point for the application
 *
 * Personal fork notes:
 * - Tracking upstream at tldraw/tldraw
 * - Custom modifications for my own learning/experimentation
 * - Added debug helper export for easier development
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
export const upstreamVersion = '2.0.0' // upstream version this fork is based on

// Personal debug helper - logs editor state info to console
// Useful during development to quickly inspect what's going on
export const debugEditorState = (editor: Editor) => {
  console.debug('[tldraw-fork] selectedShapes:', editor.getSelectedShapes())
  console.debug('[tldraw-fork] currentPage:', editor.getCurrentPage())
}
